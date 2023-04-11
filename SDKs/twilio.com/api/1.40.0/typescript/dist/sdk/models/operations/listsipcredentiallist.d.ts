import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSipCredentialListServerList: readonly ["https://api.twilio.com"];
export declare class ListSipCredentialListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSipCredentialListRequest extends SpeakeasyBase {
    /**
     * The unique id of the Account that is responsible for this resource.
     */
    accountSid: string;
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
export declare class ListSipCredentialListListSipCredentialListResponse extends SpeakeasyBase {
    credentialLists?: shared.ApiV2010AccountSipSipCredentialList[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListSipCredentialListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSipCredentialListResponse?: ListSipCredentialListListSipCredentialListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
