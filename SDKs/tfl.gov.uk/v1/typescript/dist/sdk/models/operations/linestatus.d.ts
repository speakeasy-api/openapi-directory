import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LineStatusRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    endDatePathParameter: string;
    /**
     * Automatically added
     */
    startDatePathParameter: string;
    dateRangeEndDate?: Date;
    dateRangeStartDate?: Date;
    /**
     * Include details of the disruptions that are causing the line status including the affected stops and routes
     */
    detail?: boolean;
    endDateQueryParameter: string;
    /**
     * A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.
     */
    ids: string[];
    startDateQueryParameter: string;
}
export declare class LineStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesLines?: shared.TflApiPresentationEntitiesLine[];
}
