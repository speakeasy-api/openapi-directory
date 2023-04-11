import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListApplicationServerList: readonly ["https://api.twilio.com"];
export declare class ListApplicationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListApplicationRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Application resources to read.
     */
    accountSid: string;
    /**
     * The string that identifies the Application resources to read.
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
}
/**
 * OK
 */
export declare class ListApplicationListApplicationResponse extends SpeakeasyBase {
    applications?: shared.ApiV2010AccountApplication[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListApplicationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listApplicationResponse?: ListApplicationListApplicationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
