import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListUsageRecordMonthlyServerList: readonly ["https://api.twilio.com"];
export declare class ListUsageRecordMonthlySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListUsageRecordMonthlyRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the UsageRecord resources to read.
     */
    accountSid: string;
    /**
     * The [usage category](https://www.twilio.com/docs/usage/api/usage-record#usage-categories) of the UsageRecord resources to read. Only UsageRecord resources in the specified category are retrieved.
     */
    category?: shared.UsageRecordMonthlyEnumCategoryEnum;
    /**
     * Only include usage that occurred on or before this date. Specify the date in GMT and format as `YYYY-MM-DD`.  You can also specify offsets from the current date, such as: `+30days`, which will set the end date to 30 days from the current date.
     */
    endDate?: Date;
    /**
     * Whether to include usage from the master account and all its subaccounts. Can be: `true` (the default) to include usage from the master account and all subaccounts or `false` to retrieve usage from only the specified account.
     */
    includeSubaccounts?: boolean;
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
     * Only include usage that has occurred on or after this date. Specify the date in GMT and format as `YYYY-MM-DD`. You can also specify offsets from the current date, such as: `-30days`, which will set the start date to be 30 days before the current date.
     */
    startDate?: Date;
}
/**
 * OK
 */
export declare class ListUsageRecordMonthlyListUsageRecordMonthlyResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
    usageRecords?: shared.ApiV2010AccountUsageUsageRecordUsageRecordMonthly[];
}
export declare class ListUsageRecordMonthlyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listUsageRecordMonthlyResponse?: ListUsageRecordMonthlyListUsageRecordMonthlyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
