import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListEndUserServerList: readonly ["https://numbers.twilio.com"];
export declare class ListEndUserSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListEndUserRequest extends SpeakeasyBase {
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
export declare class ListEndUserListEndUserResponseMeta extends SpeakeasyBase {
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
export declare class ListEndUserListEndUserResponse extends SpeakeasyBase {
    meta?: ListEndUserListEndUserResponseMeta;
    results?: shared.NumbersV2RegulatoryComplianceEndUser[];
}
export declare class ListEndUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listEndUserResponse?: ListEndUserListEndUserResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
