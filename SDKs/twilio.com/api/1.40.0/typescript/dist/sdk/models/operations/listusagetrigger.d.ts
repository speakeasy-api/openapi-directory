import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListUsageTriggerServerList: readonly ["https://api.twilio.com"];
export declare class ListUsageTriggerSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListUsageTriggerRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the UsageTrigger resources to read.
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
    /**
     * The frequency of recurring UsageTriggers to read. Can be: `daily`, `monthly`, or `yearly` to read recurring UsageTriggers. An empty value or a value of `alltime` reads non-recurring UsageTriggers.
     */
    recurring?: shared.UsageTriggerEnumRecurringEnum;
    /**
     * The trigger field of the UsageTriggers to read.  Can be: `count`, `usage`, or `price` as described in the [UsageRecords documentation](https://www.twilio.com/docs/usage/api/usage-record#usage-count-price).
     */
    triggerBy?: shared.UsageTriggerEnumTriggerFieldEnum;
    /**
     * The usage category of the UsageTriggers to read. Must be a supported [usage categories](https://www.twilio.com/docs/usage/api/usage-record#usage-categories).
     */
    usageCategory?: shared.UsageTriggerEnumUsageCategoryEnum;
}
/**
 * OK
 */
export declare class ListUsageTriggerListUsageTriggerResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
    usageTriggers?: shared.ApiV2010AccountUsageUsageTrigger[];
}
export declare class ListUsageTriggerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listUsageTriggerResponse?: ListUsageTriggerListUsageTriggerResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
