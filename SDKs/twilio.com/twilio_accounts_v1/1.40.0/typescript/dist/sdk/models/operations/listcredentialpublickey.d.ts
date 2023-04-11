import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListCredentialPublicKeyServerList: readonly ["https://accounts.twilio.com"];
export declare class ListCredentialPublicKeySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListCredentialPublicKeyRequest extends SpeakeasyBase {
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
export declare class ListCredentialPublicKeyListCredentialPublicKeyResponseMeta extends SpeakeasyBase {
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
export declare class ListCredentialPublicKeyListCredentialPublicKeyResponse extends SpeakeasyBase {
    credentials?: shared.AccountsV1CredentialCredentialPublicKey[];
    meta?: ListCredentialPublicKeyListCredentialPublicKeyResponseMeta;
}
export declare class ListCredentialPublicKeyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listCredentialPublicKeyResponse?: ListCredentialPublicKeyListCredentialPublicKeyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
