import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSipCredentialServerList: readonly ["https://api.twilio.com"];
export declare class CreateSipCredentialSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSipCredentialCreateSipCredentialRequest extends SpeakeasyBase {
    /**
     * The password that the username will use when authenticating SIP requests. The password must be a minimum of 12 characters, contain at least 1 digit, and have mixed case. (eg `IWasAtSignal2018`)
     */
    password: string;
    /**
     * The username that will be passed when authenticating SIP requests. The username should be sent in response to Twilio's challenge of the initial INVITE. It can be up to 32 characters long.
     */
    username: string;
}
export declare class CreateSipCredentialRequest extends SpeakeasyBase {
    /**
     * The unique id of the Account that is responsible for this resource.
     */
    accountSid: string;
    /**
     * The unique id that identifies the credential list to include the created credential.
     */
    credentialListSid: string;
    requestBody?: CreateSipCredentialCreateSipCredentialRequest;
}
export declare class CreateSipCredentialResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    apiV2010AccountSipSipCredentialListSipCredential?: shared.ApiV2010AccountSipSipCredentialListSipCredential;
}
