import { SpeakeasyBase } from "../../../internal/utils";
import { StatusCodeEnum } from "./statuscodeenum";
/**
 * A track event
 */
export declare class TrackEvent extends SpeakeasyBase {
    /**
     * Carrier detail code
     */
    carrierDetailCode: string;
    /**
     * Carrier timestamp for the event, it is assumed to be the local time of where the event occurred.
     */
    carrierOccurredAt?: Date;
    /**
     * Carrier status code
     */
    carrierStatusCode: string;
    /**
     * carrier status description
     */
    carrierStatusDescription: string;
    /**
     * City locality
     */
    cityLocality: string;
    /**
     * Company Name
     */
    companyName?: string;
    countryCode?: string;
    /**
     * Event description
     */
    description?: string;
    /**
     * Event Code
     */
    eventCode?: string;
    /**
     * Latitude coordinate of tracking event.
     */
    latitude?: number;
    /**
     * Longitude coordinate of tracking event.
     */
    longitude?: number;
    /**
     * Timestamp for carrier event
     */
    occurredAt: Date;
    /**
     * Postal code
     */
    postalCode: string;
    /**
     * Signer information
     */
    signer?: string;
    /**
     * State province
     */
    stateProvince: string;
    statusCode: StatusCodeEnum;
    /**
     * Event Status Description
     */
    statusDescription: string;
}
