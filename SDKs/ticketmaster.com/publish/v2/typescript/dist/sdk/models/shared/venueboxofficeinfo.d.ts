import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Venue box office information
 */
export declare class VenueBoxOfficeInfo extends SpeakeasyBase {
    /**
     * Venue box office accepted payment details - multi-lingual fields
     */
    acceptedPaymentDetails?: Record<string, string>;
    /**
     * Venue box office opening hours - multi-lingual fields
     */
    openHoursDetails?: Record<string, string>;
    /**
     * Venue box office phone number - multi-lingual fields
     */
    phoneNumberDetails?: Record<string, string>;
    /**
     * Venue box office will call details - multi-lingual fields
     */
    willCallDetails?: Record<string, string>;
}
