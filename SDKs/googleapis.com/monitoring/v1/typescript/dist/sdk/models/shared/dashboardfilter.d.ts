import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The specified filter type
 */
export declare enum DashboardFilterFilterTypeEnum {
    FilterTypeUnspecified = "FILTER_TYPE_UNSPECIFIED",
    ResourceLabel = "RESOURCE_LABEL",
    MetricLabel = "METRIC_LABEL",
    UserMetadataLabel = "USER_METADATA_LABEL",
    SystemMetadataLabel = "SYSTEM_METADATA_LABEL",
    Group = "GROUP"
}
/**
 * A filter to reduce the amount of data charted in relevant widgets.
 */
export declare class DashboardFilter extends SpeakeasyBase {
    /**
     * The specified filter type
     */
    filterType?: DashboardFilterFilterTypeEnum;
    /**
     * Required. The key for the label
     */
    labelKey?: string;
    /**
     * A variable-length string value.
     */
    stringValue?: string;
    /**
     * The placeholder text that can be referenced in a filter string or MQL query. If omitted, the dashboard filter will be applied to all relevant widgets in the dashboard.
     */
    templateVariable?: string;
}
