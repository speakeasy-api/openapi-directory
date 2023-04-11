import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSigningKeyServerList: readonly ["https://api.twilio.com"];
export declare class ListSigningKeySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSigningKeyRequest extends SpeakeasyBase {
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
export declare class ListSigningKeyListSigningKeyResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    signingKeys?: shared.ApiV2010AccountSigningKey[];
    start?: number;
    uri?: string;
}
export declare class ListSigningKeyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSigningKeyResponse?: ListSigningKeyListSigningKeyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
