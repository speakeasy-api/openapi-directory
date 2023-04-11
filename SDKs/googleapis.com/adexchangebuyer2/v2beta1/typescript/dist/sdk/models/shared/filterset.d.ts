import { SpeakeasyBase } from "../../../internal/utils";
import { AbsoluteDateRange } from "./absolutedaterange";
import { RealtimeTimeRange } from "./realtimetimerange";
import { RelativeDateRange } from "./relativedaterange";
export declare enum FilterSetBreakdownDimensionsEnum {
    BreakdownDimensionUnspecified = "BREAKDOWN_DIMENSION_UNSPECIFIED",
    PublisherIdentifier = "PUBLISHER_IDENTIFIER"
}
/**
 * The environment on which to filter; optional.
 */
export declare enum FilterSetEnvironmentEnum {
    EnvironmentUnspecified = "ENVIRONMENT_UNSPECIFIED",
    Web = "WEB",
    App = "APP"
}
/**
 * Creative format bidded on or allowed to bid on, can be empty.
 */
export declare enum FilterSetFormatEnum {
    FormatUnspecified = "FORMAT_UNSPECIFIED",
    NativeDisplay = "NATIVE_DISPLAY",
    NativeVideo = "NATIVE_VIDEO",
    NonNativeDisplay = "NON_NATIVE_DISPLAY",
    NonNativeVideo = "NON_NATIVE_VIDEO"
}
export declare enum FilterSetFormatsEnum {
    FormatUnspecified = "FORMAT_UNSPECIFIED",
    NativeDisplay = "NATIVE_DISPLAY",
    NativeVideo = "NATIVE_VIDEO",
    NonNativeDisplay = "NON_NATIVE_DISPLAY",
    NonNativeVideo = "NON_NATIVE_VIDEO"
}
export declare enum FilterSetPlatformsEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    Desktop = "DESKTOP",
    Tablet = "TABLET",
    Mobile = "MOBILE"
}
/**
 * The granularity of time intervals if a time series breakdown is preferred; optional.
 */
export declare enum FilterSetTimeSeriesGranularityEnum {
    TimeSeriesGranularityUnspecified = "TIME_SERIES_GRANULARITY_UNSPECIFIED",
    Hourly = "HOURLY",
    Daily = "DAILY"
}
/**
 * A set of filters that is applied to a request for data. Within a filter set, an AND operation is performed across the filters represented by each field. An OR operation is performed across the filters represented by the multiple values of a repeated field, for example, "format=VIDEO AND deal_id=12 AND (seller_network_id=34 OR seller_network_id=56)".
 */
export declare class FilterSet extends SpeakeasyBase {
    /**
     * An absolute date range, specified by its start date and end date. The supported range of dates begins 30 days before today and ends today. Validity checked upon filter set creation. If a filter set with an absolute date range is run at a later date more than 30 days after start_date, it will fail.
     */
    absoluteDateRange?: AbsoluteDateRange;
    /**
     * The set of dimensions along which to break down the response; may be empty. If multiple dimensions are requested, the breakdown is along the Cartesian product of the requested dimensions.
     */
    breakdownDimensions?: FilterSetBreakdownDimensionsEnum[];
    /**
     * The ID of the creative on which to filter; optional. This field may be set only for a filter set that accesses account-level troubleshooting data, for example, one whose name matches the `bidders/* /accounts/* /filterSets/*` pattern.
     */
    creativeId?: string;
    /**
     * The ID of the deal on which to filter; optional. This field may be set only for a filter set that accesses account-level troubleshooting data, for example, one whose name matches the `bidders/* /accounts/* /filterSets/*` pattern.
     */
    dealId?: string;
    /**
     * The environment on which to filter; optional.
     */
    environment?: FilterSetEnvironmentEnum;
    /**
     * Creative format bidded on or allowed to bid on, can be empty.
     */
    format?: FilterSetFormatEnum;
    /**
     * Creative formats bidded on or allowed to bid on, can be empty. Although this field is a list, it can only be populated with a single item. A HTTP 400 bad request error will be returned in the response if you specify multiple items.
     */
    formats?: FilterSetFormatsEnum[];
    /**
     * A user-defined name of the filter set. Filter set names must be unique globally and match one of the patterns: - `bidders/* /filterSets/*` (for accessing bidder-level troubleshooting data) - `bidders/* /accounts/* /filterSets/*` (for accessing account-level troubleshooting data) This field is required in create operations.
     */
    name?: string;
    /**
     * The list of platforms on which to filter; may be empty. The filters represented by multiple platforms are ORed together (for example, if non-empty, results must match any one of the platforms).
     */
    platforms?: FilterSetPlatformsEnum[];
    /**
     * For Open Bidding partners only. The list of publisher identifiers on which to filter; may be empty. The filters represented by multiple publisher identifiers are ORed together.
     */
    publisherIdentifiers?: string[];
    /**
     * An open-ended realtime time range specified by the start timestamp. For filter sets that specify a realtime time range RTB metrics continue to be aggregated throughout the lifetime of the filter set.
     */
    realtimeTimeRange?: RealtimeTimeRange;
    /**
     * A relative date range, specified by an offset and a duration. The supported range of dates begins 30 days before today and ends today, for example, the limits for these values are: offset_days >= 0 duration_days >= 1 offset_days + duration_days <= 30
     */
    relativeDateRange?: RelativeDateRange;
    /**
     * For Authorized Buyers only. The list of IDs of the seller (publisher) networks on which to filter; may be empty. The filters represented by multiple seller network IDs are ORed together (for example, if non-empty, results must match any one of the publisher networks). See [seller-network-ids](https://developers.google.com/authorized-buyers/rtb/downloads/seller-network-ids) file for the set of existing seller network IDs.
     */
    sellerNetworkIds?: number[];
    /**
     * The granularity of time intervals if a time series breakdown is preferred; optional.
     */
    timeSeriesGranularity?: FilterSetTimeSeriesGranularityEnum;
}
