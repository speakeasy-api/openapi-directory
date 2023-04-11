import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1MarkersSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1MarkersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Account was successfully removed from the list, or it was already not in the list.
     */
    postApiV1Markers200ApplicationJSONObject?: Record<string, any>;
}
