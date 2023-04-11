import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteKeyServerList: readonly ["https://api.twilio.com"];
export declare class DeleteKeySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteKeyRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Key resources to delete.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Key resource to delete.
     */
    sid: string;
}
export declare class DeleteKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
