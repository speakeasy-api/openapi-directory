import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteMediaServerList: readonly ["https://api.twilio.com"];
export declare class DeleteMediaSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteMediaRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Media resource(s) to delete.
     */
    accountSid: string;
    /**
     * The SID of the Message resource that this Media resource belongs to.
     */
    messageSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Media resource to delete
     */
    sid: string;
}
export declare class DeleteMediaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
