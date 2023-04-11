import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for booking lead specific information.
 */
export declare class GoogleAdsHomeservicesLocalservicesV1BookingLead extends SpeakeasyBase {
    /**
     * Timestamp of when service is provided by advertiser.
     */
    bookingAppointmentTimestamp?: string;
    /**
     * Consumer email associated with the booking lead.
     */
    consumerEmail?: string;
    /**
     * Consumer phone number associated with the booking lead.
     */
    consumerPhoneNumber?: string;
    /**
     * Name of the customer who created the lead.
     */
    customerName?: string;
    /**
     * The job type of the specified lead.
     */
    jobType?: string;
}
