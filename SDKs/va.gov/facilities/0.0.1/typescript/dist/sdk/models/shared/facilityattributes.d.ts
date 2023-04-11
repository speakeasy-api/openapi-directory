import { SpeakeasyBase } from "../../../internal/utils";
import { Addresses } from "./addresses";
import { DetailedService } from "./detailedservice";
import { Hours } from "./hours";
import { OperatingStatus } from "./operatingstatus";
import { Phone } from "./phone";
import { Satisfaction } from "./satisfaction";
import { Services } from "./services";
import { WaitTimes } from "./waittimes";
/**
 * This field is deprecated and replaced with "operating_status".
 */
export declare enum FacilityAttributesActiveStatusEnum {
    A = "A",
    T = "T"
}
export declare enum FacilityAttributesFacilityTypeEnum {
    VaBenefitsFacility = "va_benefits_facility",
    VaCemetery = "va_cemetery",
    VaHealthFacility = "va_health_facility",
    VetCenter = "vet_center"
}
export declare class FacilityAttributes extends SpeakeasyBase {
    /**
     * This field is deprecated and replaced with "operating_status".
     */
    activeStatus?: FacilityAttributesActiveStatusEnum;
    address?: Addresses;
    classification?: string;
    detailedServices?: DetailedService[];
    facilityType: FacilityAttributesFacilityTypeEnum;
    /**
     * Standard hours of operation. Currently formatted as descriptive text suitable for display, with no guarantee of a standard parseable format. Hours of operation may vary due to holidays or other events.
     */
    hours?: Hours;
    /**
     * Facility latitude
     */
    lat: number;
    /**
     * Facility longitude
     */
    long: number;
    mobile?: boolean;
    name: string;
    /**
     * Current status of facility operations. The overall status of the facility, which can be: Normal Hours and Services, Facility Notice, Limited Hours and/or Services, or Closed. This field replaces active_status.
     */
    operatingStatus: OperatingStatus;
    operationalHoursSpecialInstructions?: string;
    phone?: Phone;
    satisfaction?: Satisfaction;
    services?: Services;
    /**
     * Facility time zone
     */
    timeZone?: string;
    visn?: string;
    waitTimes?: WaitTimes;
    website?: string;
}
