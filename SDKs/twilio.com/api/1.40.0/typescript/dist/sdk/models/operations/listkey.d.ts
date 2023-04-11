import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListKeyServerList: readonly ["https://api.twilio.com"];
export declare class ListKeySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListKeyRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Key resources to read.
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
export declare class ListKeyListKeyResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    keys?: shared.ApiV2010AccountKey[];
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListKeyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listKeyResponse?: ListKeyListKeyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
