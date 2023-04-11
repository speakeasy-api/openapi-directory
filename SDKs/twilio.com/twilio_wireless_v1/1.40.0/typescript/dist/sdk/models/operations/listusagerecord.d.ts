import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListUsageRecordServerList: readonly ["https://wireless.twilio.com"];
export declare class ListUsageRecordSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListUsageRecordRequest extends SpeakeasyBase {
    /**
     * Only include usage that occurred on or before this date, specified in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html). The default is the current time.
     */
    end?: Date;
    /**
     * How to summarize the usage by time. Can be: `daily`, `hourly`, or `all`. The default is `all`. A value of `all` returns one Usage Record that describes the usage for the entire period.
     */
    granularity?: shared.UsageRecordEnumGranularityEnum;
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
     * The SID of the [Sim resource](https://www.twilio.com/docs/wireless/api/sim-resource)  to read the usage from.
     */
    simSid: string;
    /**
     * Only include usage that has occurred on or after this date, specified in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html). The default is one month before the `end` parameter value.
     */
    start?: Date;
}
export declare class ListUsageRecordListUsageRecordResponseMeta extends SpeakeasyBase {
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
export declare class ListUsageRecordListUsageRecordResponse extends SpeakeasyBase {
    meta?: ListUsageRecordListUsageRecordResponseMeta;
    usageRecords?: shared.WirelessV1SimUsageRecord[];
}
export declare class ListUsageRecordResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listUsageRecordResponse?: ListUsageRecordListUsageRecordResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
