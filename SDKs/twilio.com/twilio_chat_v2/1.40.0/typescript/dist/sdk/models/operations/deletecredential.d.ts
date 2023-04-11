import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteCredentialServerList: readonly ["https://chat.twilio.com"];
export declare class DeleteCredentialSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteCredentialRequest extends SpeakeasyBase {
    /**
     * The SID of the Credential resource to delete.
     */
    sid: string;
}
export declare class DeleteCredentialResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
