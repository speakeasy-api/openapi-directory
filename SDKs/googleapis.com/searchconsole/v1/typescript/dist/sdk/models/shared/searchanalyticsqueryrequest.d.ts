import { SpeakeasyBase } from "../../../internal/utils";
import { ApiDimensionFilterGroup } from "./apidimensionfiltergroup";
/**
 * [Optional; Default is \"auto\"] How data is aggregated. If aggregated by property, all data for the same property is aggregated; if aggregated by page, all data is aggregated by canonical URI. If you filter or group by page, choose AUTO; otherwise you can aggregate either by property or by page, depending on how you want your data calculated; see the help documentation to learn how data is calculated differently by site versus by page. **Note:** If you group or filter by page, you cannot aggregate by property. If you specify any value other than AUTO, the aggregation type in the result will match the requested type, or if you request an invalid type, you will get an error. The API will never change your aggregation type if the requested type is invalid.
 */
export declare enum SearchAnalyticsQueryRequestAggregationTypeEnum {
    Auto = "AUTO",
    ByProperty = "BY_PROPERTY",
    ByPage = "BY_PAGE"
}
/**
 * The data state to be fetched, can be full or all, the latter including full and partial data.
 */
export declare enum SearchAnalyticsQueryRequestDataStateEnum {
    DataStateUnspecified = "DATA_STATE_UNSPECIFIED",
    Final = "FINAL",
    All = "ALL"
}
export declare enum SearchAnalyticsQueryRequestDimensionsEnum {
    Date = "DATE",
    Query = "QUERY",
    Page = "PAGE",
    Country = "COUNTRY",
    Device = "DEVICE",
    SearchAppearance = "SEARCH_APPEARANCE"
}
/**
 * [Optional; Default is \"web\"] The search type to filter for.
 */
export declare enum SearchAnalyticsQueryRequestSearchTypeEnum {
    Web = "WEB",
    Image = "IMAGE",
    Video = "VIDEO",
    News = "NEWS",
    Discover = "DISCOVER",
    GoogleNews = "GOOGLE_NEWS"
}
/**
 * Optional. [Optional; Default is \"web\"] Type of report: search type, or either Discover or Gnews.
 */
export declare enum SearchAnalyticsQueryRequestTypeEnum {
    Web = "WEB",
    Image = "IMAGE",
    Video = "VIDEO",
    News = "NEWS",
    Discover = "DISCOVER",
    GoogleNews = "GOOGLE_NEWS"
}
export declare class SearchAnalyticsQueryRequest extends SpeakeasyBase {
    /**
     * [Optional; Default is \"auto\"] How data is aggregated. If aggregated by property, all data for the same property is aggregated; if aggregated by page, all data is aggregated by canonical URI. If you filter or group by page, choose AUTO; otherwise you can aggregate either by property or by page, depending on how you want your data calculated; see the help documentation to learn how data is calculated differently by site versus by page. **Note:** If you group or filter by page, you cannot aggregate by property. If you specify any value other than AUTO, the aggregation type in the result will match the requested type, or if you request an invalid type, you will get an error. The API will never change your aggregation type if the requested type is invalid.
     */
    aggregationType?: SearchAnalyticsQueryRequestAggregationTypeEnum;
    /**
     * The data state to be fetched, can be full or all, the latter including full and partial data.
     */
    dataState?: SearchAnalyticsQueryRequestDataStateEnum;
    /**
     * [Optional] Zero or more filters to apply to the dimension grouping values; for example, 'query contains \"buy\"' to see only data where the query string contains the substring \"buy\" (not case-sensitive). You can filter by a dimension without grouping by it.
     */
    dimensionFilterGroups?: ApiDimensionFilterGroup[];
    /**
     * [Optional] Zero or more dimensions to group results by. Dimensions are the group-by values in the Search Analytics page. Dimensions are combined to create a unique row key for each row. Results are grouped in the order that you supply these dimensions.
     */
    dimensions?: SearchAnalyticsQueryRequestDimensionsEnum[];
    /**
     * [Required] End date of the requested date range, in YYYY-MM-DD format, in PST (UTC - 8:00). Must be greater than or equal to the start date. This value is included in the range.
     */
    endDate?: string;
    /**
     * [Optional; Default is 1000] The maximum number of rows to return. Must be a number from 1 to 25,000 (inclusive).
     */
    rowLimit?: number;
    /**
     * [Optional; Default is \"web\"] The search type to filter for.
     */
    searchType?: SearchAnalyticsQueryRequestSearchTypeEnum;
    /**
     *  [Required] Start date of the requested date range, in YYYY-MM-DD format, in PST time (UTC - 8:00). Must be less than or equal to the end date. This value is included in the range.
     */
    startDate?: string;
    /**
     * [Optional; Default is 0] Zero-based index of the first row in the response. Must be a non-negative number.
     */
    startRow?: number;
    /**
     * Optional. [Optional; Default is \"web\"] Type of report: search type, or either Discover or Gnews.
     */
    type?: SearchAnalyticsQueryRequestTypeEnum;
}
