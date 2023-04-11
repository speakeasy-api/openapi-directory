import { SpeakeasyBase } from "../../../internal/utils";
import { Places } from "./places";
import { PointRadius } from "./pointradius";
/**
 * Indicates the type of the service area business.
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
     * Indicates the type of the service area business.
     */
    businessType?: ServiceAreaBusinessBusinessTypeEnum;
    /**
     * Defines the union of areas represented by a set of places.
     */
    places?: Places;
    /**
     * A radius around a particular point (latitude/longitude).
     */
    radius?: PointRadius;
}
