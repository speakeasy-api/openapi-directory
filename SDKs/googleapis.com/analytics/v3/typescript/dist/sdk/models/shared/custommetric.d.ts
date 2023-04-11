import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parent link for the custom metric. Points to the property to which the custom metric belongs.
 */
export declare class CustomMetricParentLink extends SpeakeasyBase {
    /**
     * Link to the property to which the custom metric belongs.
     */
    href?: string;
    /**
     * Type of the parent link. Set to "analytics#webproperty".
     */
    type?: string;
}
/**
 * JSON template for Analytics Custom Metric.
 */
export declare class CustomMetricInput extends SpeakeasyBase {
    /**
     * Account ID.
     */
    accountId?: string;
    /**
     * Boolean indicating whether the custom metric is active.
     */
    active?: boolean;
    /**
     * Custom metric ID.
     */
    id?: string;
    /**
     * Max value of custom metric.
     */
    maxValue?: string;
    /**
     * Min value of custom metric.
     */
    minValue?: string;
    /**
     * Name of the custom metric.
     */
    name?: string;
    /**
     * Parent link for the custom metric. Points to the property to which the custom metric belongs.
     */
    parentLink?: CustomMetricParentLink;
    /**
     * Scope of the custom metric: HIT or PRODUCT.
     */
    scope?: string;
    /**
     * Data type of custom metric.
     */
    type?: string;
    /**
     * Property ID.
     */
    webPropertyId?: string;
}
/**
 * JSON template for Analytics Custom Metric.
 */
export declare class CustomMetric extends SpeakeasyBase {
    /**
     * Account ID.
     */
    accountId?: string;
    /**
     * Boolean indicating whether the custom metric is active.
     */
    active?: boolean;
    /**
     * Time the custom metric was created.
     */
    created?: Date;
    /**
     * Custom metric ID.
     */
    id?: string;
    /**
     * Index of the custom metric.
     */
    index?: number;
    /**
     * Kind value for a custom metric. Set to "analytics#customMetric". It is a read-only field.
     */
    kind?: string;
    /**
     * Max value of custom metric.
     */
    maxValue?: string;
    /**
     * Min value of custom metric.
     */
    minValue?: string;
    /**
     * Name of the custom metric.
     */
    name?: string;
    /**
     * Parent link for the custom metric. Points to the property to which the custom metric belongs.
     */
    parentLink?: CustomMetricParentLink;
    /**
     * Scope of the custom metric: HIT or PRODUCT.
     */
    scope?: string;
    /**
     * Link for the custom metric
     */
    selfLink?: string;
    /**
     * Data type of custom metric.
     */
    type?: string;
    /**
     * Time the custom metric was last modified.
     */
    updated?: Date;
    /**
     * Property ID.
     */
    webPropertyId?: string;
}
