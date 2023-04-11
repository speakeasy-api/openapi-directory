import { SpeakeasyBase } from "../../../internal/utils";
import { UsageRecordYesterdayEnumCategoryEnum } from "./usagerecordyesterdayenumcategoryenum";
export declare class ApiV2010AccountUsageUsageRecordUsageRecordYesterday extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that accrued the usage.
     */
    accountSid?: string;
    /**
     * The API version used to create the resource.
     */
    apiVersion?: string;
    /**
     * Usage records up to date as of this timestamp, formatted as YYYY-MM-DDTHH:MM:SS+00:00. All timestamps are in GMT
     */
    asOf?: string;
    category?: UsageRecordYesterdayEnumCategoryEnum;
    /**
     * The number of usage events, such as the number of calls.
     */
    count?: string;
    /**
     * The units in which `count` is measured, such as `calls` for calls or `messages` for SMS.
     */
    countUnit?: string;
    /**
     * A plain-language description of the usage category.
     */
    description?: string;
    /**
     * The last date for which usage is included in the UsageRecord. The date is specified in GMT and formatted as `YYYY-MM-DD`.
     */
    endDate?: Date;
    /**
     * The total price of the usage in the currency specified in `price_unit` and associated with the account.
     */
    price?: number;
    /**
     * The currency in which `price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format, such as `usd`, `eur`, and `jpy`.
     */
    priceUnit?: string;
    /**
     * The first date for which usage is included in this UsageRecord. The date is specified in GMT and formatted as `YYYY-MM-DD`.
     */
    startDate?: Date;
    /**
     * A list of related resources identified by their URIs. For more information, see [List Subresources](https://www.twilio.com/docs/usage/api/usage-record#list-subresources).
     */
    subresourceUris?: Record<string, any>;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`.
     */
    uri?: string;
    /**
     * The amount used to bill usage and measured in units described in `usage_unit`.
     */
    usage?: string;
    /**
     * The units in which `usage` is measured, such as `minutes` for calls or `messages` for SMS.
     */
    usageUnit?: string;
}
