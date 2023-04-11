import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAdsHomeservicesLocalservicesV1AggregatorInfo } from "./googleadshomeserviceslocalservicesv1aggregatorinfo";
import { GoogleAdsHomeservicesLocalservicesV1BookingLead } from "./googleadshomeserviceslocalservicesv1bookinglead";
import { GoogleAdsHomeservicesLocalservicesV1MessageLead } from "./googleadshomeserviceslocalservicesv1messagelead";
import { GoogleAdsHomeservicesLocalservicesV1PhoneLead } from "./googleadshomeserviceslocalservicesv1phonelead";
import { GoogleTypeTimeZone } from "./googletypetimezone";
/**
 * Whether the lead has been charged.
 */
export declare enum GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum {
    ChargeStatusUnspecified = "CHARGE_STATUS_UNSPECIFIED",
    Charged = "CHARGED",
    NotCharged = "NOT_CHARGED"
}
/**
 * Lead type.
 */
export declare enum GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum {
    LeadTypeUnspecified = "LEAD_TYPE_UNSPECIFIED",
    Message = "MESSAGE",
    PhoneCall = "PHONE_CALL",
    Booking = "BOOKING"
}
/**
 * A Detailed Lead Report of a lead identified by their lead id and contains consumer, account, monetization, and lead data.
 */
export declare class GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport extends SpeakeasyBase {
    /**
     * Identifies account that received the lead.
     */
    accountId?: string;
    /**
     * Conatiner for aggregator specific information if lead is for an aggregator GLS account.
     */
    aggregatorInfo?: GoogleAdsHomeservicesLocalservicesV1AggregatorInfo;
    /**
     * Container for booking lead specific information.
     */
    bookingLead?: GoogleAdsHomeservicesLocalservicesV1BookingLead;
    /**
     * Business name associated to the account.
     */
    businessName?: string;
    /**
     * Whether the lead has been charged.
     */
    chargeStatus?: GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum;
    /**
     * Currency code.
     */
    currencyCode?: string;
    /**
     * Dispute status related to the lead.
     */
    disputeStatus?: string;
    /**
     * Location of the associated account's home city.
     */
    geo?: string;
    /**
     * Lead category (e.g. hvac, plumber)
     */
    leadCategory?: string;
    /**
     * Timestamp of when the lead was created.
     */
    leadCreationTimestamp?: string;
    /**
     * Unique identifier of a Detailed Lead Report.
     */
    leadId?: string;
    /**
     * Price of the lead (available only after it has been charged).
     */
    leadPrice?: number;
    /**
     * Lead type.
     */
    leadType?: GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum;
    /**
     * Container for message lead specific information.
     */
    messageLead?: GoogleAdsHomeservicesLocalservicesV1MessageLead;
    /**
     * Container for phone lead specific information.
     */
    phoneLead?: GoogleAdsHomeservicesLocalservicesV1PhoneLead;
    /**
     * Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
     */
    timezone?: GoogleTypeTimeZone;
}
