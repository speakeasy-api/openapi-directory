import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSipCredentialServerList: readonly ["https://api.twilio.com"];
export declare class DeleteSipCredentialSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSipCredentialRequest extends SpeakeasyBase {
    /**
     * The unique id of the Account that is responsible for this resource.
     */
    accountSid: string;
    /**
     * The unique id that identifies the credential list that contains the desired credentials.
     */
    credentialListSid: string;
    /**
     * The unique id that identifies the resource to delete.
     */
    sid: string;
}
export declare class DeleteSipCredentialResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
