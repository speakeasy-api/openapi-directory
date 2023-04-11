import { SpeakeasyBase } from "../../../internal/utils";
import { AppointmentPhoneNumber } from "./appointmentphonenumber";
import { DetailedServiceLocation } from "./detailedservicelocation";
/**
 * Detailed information of a facility service.
 */
export declare class DetailedService extends SpeakeasyBase {
    /**
     * Additional appointment information. May contain html / string formatting characters.
     */
    appointmentLeadin?: string;
    /**
     * List of phone numbers related to scheduling appointments for this service.
     */
    appointmentPhones?: AppointmentPhoneNumber[];
    /**
     * Deprecated until further notice.
     */
    descriptionFacility?: string;
    /**
     * Service name.
     */
    name?: string;
    /**
     * String detailing online scheduling availability.
     */
    onlineSchedulingAvailable?: string;
    /**
     * URL to a page with additional details for this service within the associated facility's health care system.
     */
    path?: string;
    /**
     * String detailing if referrals are required for the service.
     */
    referralRequired?: string;
    /**
     * List of service locations.
     */
    serviceLocations?: DetailedServiceLocation[];
    /**
     * String detailing if walk-ins are accepted for the service.
     */
    walkInsAccepted?: string;
}
