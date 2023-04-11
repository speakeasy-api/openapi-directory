import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListShortCodeServerList: readonly ["https://api.twilio.com"];
export declare class ListShortCodeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListShortCodeRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ShortCode resource(s) to read.
     */
    accountSid: string;
    /**
     * The string that identifies the ShortCode resources to read.
     */
    friendlyName?: string;
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
     * Only show the ShortCode resources that match this pattern. You can specify partial numbers and use '*' as a wildcard for any digit.
     */
    shortCode?: string;
}
/**
 * OK
 */
export declare class ListShortCodeListShortCodeResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    shortCodes?: shared.ApiV2010AccountShortCode[];
    start?: number;
    uri?: string;
}
export declare class ListShortCodeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listShortCodeResponse?: ListShortCodeListShortCodeResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
