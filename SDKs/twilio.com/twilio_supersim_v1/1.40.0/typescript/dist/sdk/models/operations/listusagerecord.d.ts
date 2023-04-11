import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListUsageRecordServerList: readonly ["https://supersim.twilio.com"];
export declare class ListUsageRecordSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListUsageRecordRequest extends SpeakeasyBase {
    /**
     * Only include usage that occurred before this time (exclusive), specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Default is the current time.
     */
    endTime?: Date;
    /**
     * SID or unique name of a Fleet resource. Only show UsageRecords representing usage for Super SIMs belonging to this Fleet resource at the time the usage occurred.
     */
    fleet?: string;
    /**
     * Time-based grouping that UsageRecords should be aggregated by. Can be: `hour`, `day`, or `all`. Default is `all`. `all` returns one UsageRecord that describes the usage for the entire period.
     */
    granularity?: shared.UsageRecordEnumGranularityEnum;
    /**
     * Dimension over which to aggregate usage records. Can be: `sim`, `fleet`, `network`, `isoCountry`. Default is to not aggregate across any of these dimensions, UsageRecords will be aggregated into the time buckets described by the `Granularity` parameter.
     */
    group?: shared.UsageRecordEnumGroupEnum;
    /**
     * Alpha-2 ISO Country Code. Only show UsageRecords representing usage in this country.
     */
    isoCountry?: string;
    /**
     * SID of a Network resource. Only show UsageRecords representing usage on this network.
     */
    network?: string;
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
     * SID or unique name of a Sim resource. Only show UsageRecords representing usage incurred by this Super SIM.
     */
    sim?: string;
    /**
     * Only include usage that occurred at or after this time, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Default is one month before the `end_time`.
     */
    startTime?: Date;
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
    usageRecords?: shared.SupersimV1UsageRecord[];
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
