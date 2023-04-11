import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListPoliciesServerList: readonly ["https://trusthub.twilio.com"];
export declare class ListPoliciesSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListPoliciesRequest extends SpeakeasyBase {
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
export declare class ListPoliciesListPoliciesResponseMeta extends SpeakeasyBase {
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
export declare class ListPoliciesListPoliciesResponse extends SpeakeasyBase {
    meta?: ListPoliciesListPoliciesResponseMeta;
    results?: shared.TrusthubV1Policies[];
}
export declare class ListPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listPoliciesResponse?: ListPoliciesListPoliciesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
