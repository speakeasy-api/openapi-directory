import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { GeoTaxonomy } from "./geotaxonomy";
import { PricingInfo } from "./pricinginfo";
/**
 * Encapsulates a single SKU in Google Cloud Platform
 */
export declare class Sku extends SpeakeasyBase {
    /**
     * Represents the category hierarchy of a SKU.
     */
    category?: Category;
    /**
     * A human readable description of the SKU, has a maximum length of 256 characters.
     */
    description?: string;
    /**
     * Encapsulates the geographic taxonomy data for a sku.
     */
    geoTaxonomy?: GeoTaxonomy;
    /**
     * The resource name for the SKU. Example: "services/DA34-426B-A397/skus/AA95-CD31-42FE"
     */
    name?: string;
    /**
     * A timeline of pricing info for this SKU in chronological order.
     */
    pricingInfo?: PricingInfo[];
    /**
     * Identifies the service provider. This is 'Google' for first party services in Google Cloud Platform.
     */
    serviceProviderName?: string;
    /**
     * List of service regions this SKU is offered at. Example: "asia-east1" Service regions can be found at https://cloud.google.com/about/locations/
     */
    serviceRegions?: string[];
    /**
     * The identifier for the SKU. Example: "AA95-CD31-42FE"
     */
    skuId?: string;
}
