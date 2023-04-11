import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteEndUserServerList: readonly ["https://trusthub.twilio.com"];
export declare class DeleteEndUserSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteEndUserRequest extends SpeakeasyBase {
    /**
     * The unique string created by Twilio to identify the End User resource.
     */
    sid: string;
}
export declare class DeleteEndUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
