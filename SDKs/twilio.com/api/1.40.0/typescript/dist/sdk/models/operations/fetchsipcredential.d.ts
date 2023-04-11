import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSipCredentialServerList: readonly ["https://api.twilio.com"];
export declare class FetchSipCredentialSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSipCredentialRequest extends SpeakeasyBase {
    /**
     * The unique id of the Account that is responsible for this resource.
     */
    accountSid: string;
    /**
     * The unique id that identifies the credential list that contains the desired credential.
     */
    credentialListSid: string;
    /**
     * The unique id that identifies the resource to fetch.
     */
    sid: string;
}
export declare class FetchSipCredentialResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountSipSipCredentialListSipCredential?: shared.ApiV2010AccountSipSipCredentialListSipCredential;
}
