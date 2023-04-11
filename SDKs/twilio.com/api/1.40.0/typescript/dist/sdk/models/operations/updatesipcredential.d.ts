import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSipCredentialServerList: readonly ["https://api.twilio.com"];
export declare class UpdateSipCredentialSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSipCredentialUpdateSipCredentialRequest extends SpeakeasyBase {
    /**
     * The password that the username will use when authenticating SIP requests. The password must be a minimum of 12 characters, contain at least 1 digit, and have mixed case. (eg `IWasAtSignal2018`)
     */
    password?: string;
}
export declare class UpdateSipCredentialRequest extends SpeakeasyBase {
    /**
     * The unique id of the Account that is responsible for this resource.
     */
    accountSid: string;
    /**
     * The unique id that identifies the credential list that includes this credential.
     */
    credentialListSid: string;
    requestBody?: UpdateSipCredentialUpdateSipCredentialRequest;
    /**
     * The unique id that identifies the resource to update.
     */
    sid: string;
}
export declare class UpdateSipCredentialResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountSipSipCredentialListSipCredential?: shared.ApiV2010AccountSipSipCredentialListSipCredential;
}
