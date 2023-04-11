import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSipCredentialServerList: readonly ["https://api.twilio.com"];
export declare class ListSipCredentialSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSipCredentialRequest extends SpeakeasyBase {
    /**
     * The unique id of the Account that is responsible for this resource.
     */
    accountSid: string;
    /**
     * The unique id that identifies the credential list that contains the desired credentials.
     */
    credentialListSid: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
}
/**
 * OK
 */
export declare class ListSipCredentialListSipCredentialResponse extends SpeakeasyBase {
    credentials?: shared.ApiV2010AccountSipSipCredentialListSipCredential[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListSipCredentialResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSipCredentialResponse?: ListSipCredentialListSipCredentialResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
