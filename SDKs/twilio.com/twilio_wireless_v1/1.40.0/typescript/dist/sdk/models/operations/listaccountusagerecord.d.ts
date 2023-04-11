import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListAccountUsageRecordServerList: readonly ["https://wireless.twilio.com"];
export declare class ListAccountUsageRecordSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListAccountUsageRecordRequest extends SpeakeasyBase {
    /**
     * Only include usage that has occurred on or before this date. Format is [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html).
     */
    end?: Date;
    /**
     * How to summarize the usage by time. Can be: `daily`, `hourly`, or `all`. A value of `all` returns one Usage Record that describes the usage for the entire period.
     */
    granularity?: shared.AccountUsageRecordEnumGranularityEnum;
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
     * Only include usage that has occurred on or after this date. Format is [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html).
     */
    start?: Date;
}
export declare class ListAccountUsageRecordListAccountUsageRecordResponseMeta extends SpeakeasyBase {
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
export declare class ListAccountUsageRecordListAccountUsageRecordResponse extends SpeakeasyBase {
    meta?: ListAccountUsageRecordListAccountUsageRecordResponseMeta;
    usageRecords?: shared.WirelessV1AccountUsageRecord[];
}
export declare class ListAccountUsageRecordResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listAccountUsageRecordResponse?: ListAccountUsageRecordListAccountUsageRecordResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
