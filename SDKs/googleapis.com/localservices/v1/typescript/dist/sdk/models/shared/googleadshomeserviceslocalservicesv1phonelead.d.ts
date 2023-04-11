import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for phone lead specific information.
 */
export declare class GoogleAdsHomeservicesLocalservicesV1PhoneLead extends SpeakeasyBase {
    /**
     * Timestamp of the phone call which resulted in a charged phone lead.
     */
    chargedCallTimestamp?: string;
    /**
     * Duration of the charged phone call in seconds.
     */
    chargedConnectedCallDurationSeconds?: string;
    /**
     * Consumer phone number associated with the phone lead.
     */
    consumerPhoneNumber?: string;
}
