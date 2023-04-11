import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaCatalogAttribute } from "./googlecloudretailv2alphacatalogattribute";
/**
 * Output only. The AttributeConfigLevel used for this catalog.
 */
export declare enum GoogleCloudRetailV2alphaAttributesConfigAttributeConfigLevelEnum {
    AttributeConfigLevelUnspecified = "ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED",
    ProductLevelAttributeConfig = "PRODUCT_LEVEL_ATTRIBUTE_CONFIG",
    CatalogLevelAttributeConfig = "CATALOG_LEVEL_ATTRIBUTE_CONFIG"
}
/**
 * Catalog level attribute config.
 */
export declare class GoogleCloudRetailV2alphaAttributesConfig extends SpeakeasyBase {
    /**
     * Output only. The AttributeConfigLevel used for this catalog.
     */
    attributeConfigLevel?: GoogleCloudRetailV2alphaAttributesConfigAttributeConfigLevelEnum;
    /**
     * Enable attribute(s) config at catalog level. For example, indexable, dynamic_facetable, or searchable for each attribute. The key is catalog attribute's name. For example: `color`, `brands`, `attributes.custom_attribute`, such as `attributes.xyz`. The maximum number of catalog attributes allowed in a request is 1000.
     */
    catalogAttributes?: Record<string, GoogleCloudRetailV2alphaCatalogAttribute>;
    /**
     * Required. Immutable. The fully qualified resource name of the attribute config. Format: `projects/* /locations/* /catalogs/* /attributesConfig`
     */
    name?: string;
}
