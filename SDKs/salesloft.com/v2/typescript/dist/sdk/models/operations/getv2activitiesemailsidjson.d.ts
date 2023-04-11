import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2ActivitiesEmailsIdJsonRequest extends SpeakeasyBase {
    /**
     * Email ID
     */
    id: string;
}
export declare class GetV2ActivitiesEmailsIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
