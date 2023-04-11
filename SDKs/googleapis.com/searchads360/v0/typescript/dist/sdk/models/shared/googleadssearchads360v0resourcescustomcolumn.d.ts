import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The type of the result value of the custom column.
 */
export declare enum GoogleAdsSearchads360V0ResourcesCustomColumnValueTypeEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    String = "STRING",
    Int64 = "INT64",
    Double = "DOUBLE",
    Boolean = "BOOLEAN"
}
/**
 * A custom column. See Search Ads 360 custom column at https://support.google.com/sa360/answer/9633916
 */
export declare class GoogleAdsSearchads360V0ResourcesCustomColumn extends SpeakeasyBase {
    /**
     * Output only. User-defined description of the custom column.
     */
    description?: string;
    /**
     * Output only. ID of the custom column.
     */
    id?: string;
    /**
     * Output only. User-defined name of the custom column.
     */
    name?: string;
    /**
     * Output only. True when the custom column is available to be used in the query of SearchAds360Service.Search and SearchAds360Service.SearchStream.
     */
    queryable?: boolean;
    /**
     * Output only. The list of the referenced system columns of this custom column. For example, A custom column "sum of impressions and clicks" has referenced system columns of {"metrics.clicks", "metrics.impressions"}.
     */
    referencedSystemColumns?: string[];
    /**
     * Output only. True when the custom column is referring to one or more attributes.
     */
    referencesAttributes?: boolean;
    /**
     * Output only. True when the custom column is referring to one or more metrics.
     */
    referencesMetrics?: boolean;
    /**
     * Immutable. The resource name of the custom column. Custom column resource names have the form: `customers/{customer_id}/customColumns/{custom_column_id}`
     */
    resourceName?: string;
    /**
     * Output only. The type of the result value of the custom column.
     */
    valueType?: GoogleAdsSearchads360V0ResourcesCustomColumnValueTypeEnum;
}
