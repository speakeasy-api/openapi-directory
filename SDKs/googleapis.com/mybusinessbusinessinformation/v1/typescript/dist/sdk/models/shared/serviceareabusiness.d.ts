import { SpeakeasyBase } from "../../../internal/utils";
import { Places } from "./places";
/**
 * Required. Indicates the type of the service area business.
 */
export declare enum ServiceAreaBusinessBusinessTypeEnum {
    BusinessTypeUnspecified = "BUSINESS_TYPE_UNSPECIFIED",
    CustomerLocationOnly = "CUSTOMER_LOCATION_ONLY",
    CustomerAndBusinessLocation = "CUSTOMER_AND_BUSINESS_LOCATION"
}
/**
 * Service area businesses provide their service at the customer's location (for example, a locksmith or plumber).
 */
export declare class ServiceAreaBusiness extends SpeakeasyBase {
    /**
     * Required. Indicates the type of the service area business.
     */
    businessType?: ServiceAreaBusinessBusinessTypeEnum;
    /**
     * Defines the union of areas represented by a set of places.
     */
    places?: Places;
    /**
     * Immutable. CLDR region code of the country/region that this service area business is based in. See http://cldr.unicode.org/ and http://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland. This field is required for CUSTOMER_LOCATION_ONLY businesses, and is ignored otherwise. The region specified here can be different from regions for the areas that this business serves (e.g. service area businesses that provide services in regions other than the one that they are based in). If this location requires verification after creation, the address provided for verification purposes *must* be located within this region, and the business owner or their authorized representative *must* be able to receive postal mail at the provided verification address.
     */
    regionCode?: string;
}
