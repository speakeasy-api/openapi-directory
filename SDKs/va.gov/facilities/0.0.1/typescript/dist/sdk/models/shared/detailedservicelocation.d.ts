import { SpeakeasyBase } from "../../../internal/utils";
import { AppointmentPhoneNumber } from "./appointmentphonenumber";
import { DetailedServiceAddress } from "./detailedserviceaddress";
import { DetailedServiceEmailContact } from "./detailedserviceemailcontact";
import { DetailedServiceHours } from "./detailedservicehours";
/**
 * Details for a location offering a service.
 */
export declare class DetailedServiceLocation extends SpeakeasyBase {
    /**
     * Additional information related to service location hours.
     */
    additionalHoursInfo?: string;
    /**
     * List of appointment phone information.
     */
    appointmentPhones?: AppointmentPhoneNumber[];
    /**
     * List of email contact information.
     */
    emailContacts?: DetailedServiceEmailContact[];
    /**
     * Standard hours of operation. Currently formatted as descriptive text suitable for display, with no guarantee of a standard parseable format. Hours of operation may vary due to holidays or other events.
     */
    facilityServiceHours?: DetailedServiceHours;
    /**
     * Service location address.
     */
    serviceLocationAddress?: DetailedServiceAddress;
}
