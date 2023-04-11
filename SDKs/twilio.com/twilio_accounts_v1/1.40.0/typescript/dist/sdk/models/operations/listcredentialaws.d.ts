import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListCredentialAwsServerList: readonly ["https://accounts.twilio.com"];
export declare class ListCredentialAwsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListCredentialAwsRequest extends SpeakeasyBase {
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
export declare class ListCredentialAwsListCredentialAwsResponseMeta extends SpeakeasyBase {
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
export declare class ListCredentialAwsListCredentialAwsResponse extends SpeakeasyBase {
    credentials?: shared.AccountsV1CredentialCredentialAws[];
    meta?: ListCredentialAwsListCredentialAwsResponseMeta;
}
export declare class ListCredentialAwsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listCredentialAwsResponse?: ListCredentialAwsListCredentialAwsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
