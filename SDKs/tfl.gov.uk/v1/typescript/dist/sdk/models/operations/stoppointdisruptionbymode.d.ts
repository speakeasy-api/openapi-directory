import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StopPointDisruptionByModeRequest extends SpeakeasyBase {
    includeRouteBlockedStops?: boolean;
    /**
     * A comma-seperated list of modes e.g. tube,dlr
     */
    modes: string[];
}
export declare class StopPointDisruptionByModeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesDisruptedPoints?: shared.TflApiPresentationEntitiesDisruptedPoint[];
}
