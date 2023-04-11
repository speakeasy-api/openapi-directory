import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListCredentialListServerList: readonly ["https://trunking.twilio.com"];
export declare class ListCredentialListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListCredentialListRequest extends SpeakeasyBase {
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
    /**
     * The SID of the Trunk from which to read the credential lists.
     */
    trunkSid: string;
}
export declare class ListCredentialListListCredentialListResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListCredentialListListCredentialListResponse extends SpeakeasyBase {
    credentialLists?: shared.TrunkingV1TrunkCredentialList[];
    meta?: ListCredentialListListCredentialListResponseMeta;
}
export declare class ListCredentialListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listCredentialListResponse?: ListCredentialListListCredentialListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
