import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LineStatusByModeRequest extends SpeakeasyBase {
    /**
     * Include details of the disruptions that are causing the line status including the affected stops and routes
     */
    detail?: boolean;
    /**
     * A comma-separated list of modes to filter by. e.g. tube,dlr
     */
    modes: string[];
    /**
     * If specified, ensures that only those line status(es) are returned within the lines that have disruptions with the matching severity level.
     */
    severityLevel?: string;
}
export declare class LineStatusByModeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesLines?: shared.TflApiPresentationEntitiesLine[];
}
