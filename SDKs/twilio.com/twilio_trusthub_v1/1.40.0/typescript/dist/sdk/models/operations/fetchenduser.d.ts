import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchEndUserServerList: readonly ["https://trusthub.twilio.com"];
export declare class FetchEndUserSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchEndUserRequest extends SpeakeasyBase {
    /**
     * The unique string created by Twilio to identify the End User resource.
     */
    sid: string;
}
export declare class FetchEndUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    trusthubV1EndUser?: shared.TrusthubV1EndUser;
}
