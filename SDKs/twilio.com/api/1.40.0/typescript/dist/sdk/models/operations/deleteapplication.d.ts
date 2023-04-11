import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteApplicationServerList: readonly ["https://api.twilio.com"];
export declare class DeleteApplicationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteApplicationRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Application resources to delete.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Application resource to delete.
     */
    sid: string;
}
export declare class DeleteApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
