import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2ActivitiesCallsIdJsonRequest extends SpeakeasyBase {
    /**
     * Call ID
     */
    id: string;
}
export declare class GetV2ActivitiesCallsIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
