import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListBillingPeriodServerList: readonly ["https://supersim.twilio.com"];
export declare class ListBillingPeriodSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListBillingPeriodRequest extends SpeakeasyBase {
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
     * The SID of the Super SIM to list Billing Periods for.
     */
    simSid: string;
}
export declare class ListBillingPeriodListBillingPeriodResponseMeta extends SpeakeasyBase {
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
export declare class ListBillingPeriodListBillingPeriodResponse extends SpeakeasyBase {
    billingPeriods?: shared.SupersimV1SimBillingPeriod[];
    meta?: ListBillingPeriodListBillingPeriodResponseMeta;
}
export declare class ListBillingPeriodResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listBillingPeriodResponse?: ListBillingPeriodListBillingPeriodResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
