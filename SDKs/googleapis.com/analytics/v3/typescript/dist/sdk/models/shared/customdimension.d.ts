import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parent link for the custom dimension. Points to the property to which the custom dimension belongs.
 */
export declare class CustomDimensionParentLink extends SpeakeasyBase {
    /**
     * Link to the property to which the custom dimension belongs.
     */
    href?: string;
    /**
     * Type of the parent link. Set to "analytics#webproperty".
     */
    type?: string;
}
/**
 * JSON template for Analytics Custom Dimension.
 */
export declare class CustomDimensionInput extends SpeakeasyBase {
    /**
     * Account ID.
     */
    accountId?: string;
    /**
     * Boolean indicating whether the custom dimension is active.
     */
    active?: boolean;
    /**
     * Custom dimension ID.
     */
    id?: string;
    /**
     * Name of the custom dimension.
     */
    name?: string;
    /**
     * Parent link for the custom dimension. Points to the property to which the custom dimension belongs.
     */
    parentLink?: CustomDimensionParentLink;
    /**
     * Scope of the custom dimension: HIT, SESSION, USER or PRODUCT.
     */
    scope?: string;
    /**
     * Property ID.
     */
    webPropertyId?: string;
}
/**
 * JSON template for Analytics Custom Dimension.
 */
export declare class CustomDimension extends SpeakeasyBase {
    /**
     * Account ID.
     */
    accountId?: string;
    /**
     * Boolean indicating whether the custom dimension is active.
     */
    active?: boolean;
    /**
     * Time the custom dimension was created.
     */
    created?: Date;
    /**
     * Custom dimension ID.
     */
    id?: string;
    /**
     * Index of the custom dimension.
     */
    index?: number;
    /**
     * Kind value for a custom dimension. Set to "analytics#customDimension". It is a read-only field.
     */
    kind?: string;
    /**
     * Name of the custom dimension.
     */
    name?: string;
    /**
     * Parent link for the custom dimension. Points to the property to which the custom dimension belongs.
     */
    parentLink?: CustomDimensionParentLink;
    /**
     * Scope of the custom dimension: HIT, SESSION, USER or PRODUCT.
     */
    scope?: string;
    /**
     * Link for the custom dimension
     */
    selfLink?: string;
    /**
     * Time the custom dimension was last modified.
     */
    updated?: Date;
    /**
     * Property ID.
     */
    webPropertyId?: string;
}
