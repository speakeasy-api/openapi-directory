/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport - A Detailed Lead Report of a lead identified by their lead id and contains consumer, account, monetization, and lead data.
 */
public class GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport {
    /**
     * Identifies account that received the lead.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;

    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    
    /**
     * Conatiner for aggregator specific information if lead is for an aggregator GLS account.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregatorInfo")
    public GoogleAdsHomeservicesLocalservicesV1AggregatorInfo aggregatorInfo;

    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withAggregatorInfo(GoogleAdsHomeservicesLocalservicesV1AggregatorInfo aggregatorInfo) {
        this.aggregatorInfo = aggregatorInfo;
        return this;
    }
    
    /**
     * Container for booking lead specific information.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingLead")
    public GoogleAdsHomeservicesLocalservicesV1BookingLead bookingLead;

    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withBookingLead(GoogleAdsHomeservicesLocalservicesV1BookingLead bookingLead) {
        this.bookingLead = bookingLead;
        return this;
    }
    
    /**
     * Business name associated to the account.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessName")
    public String businessName;

    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withBusinessName(String businessName) {
        this.businessName = businessName;
        return this;
    }
    
    /**
     * Whether the lead has been charged.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeStatus")
    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum chargeStatus;

    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withChargeStatus(GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum chargeStatus) {
        this.chargeStatus = chargeStatus;
        return this;
    }
    
    /**
     * Currency code.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;

    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    
    /**
     * Dispute status related to the lead.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disputeStatus")
    public String disputeStatus;

    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withDisputeStatus(String disputeStatus) {
        this.disputeStatus = disputeStatus;
        return this;
    }
    
    /**
     * Location of the associated account's home city.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geo")
    public String geo;

    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withGeo(String geo) {
        this.geo = geo;
        return this;
    }
    
    /**
     * Lead category (e.g. hvac, plumber)
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leadCategory")
    public String leadCategory;

    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withLeadCategory(String leadCategory) {
        this.leadCategory = leadCategory;
        return this;
    }
    
    /**
     * Timestamp of when the lead was created.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leadCreationTimestamp")
    public String leadCreationTimestamp;

    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withLeadCreationTimestamp(String leadCreationTimestamp) {
        this.leadCreationTimestamp = leadCreationTimestamp;
        return this;
    }
    
    /**
     * Unique identifier of a Detailed Lead Report.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leadId")
    public String leadId;

    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withLeadId(String leadId) {
        this.leadId = leadId;
        return this;
    }
    
    /**
     * Price of the lead (available only after it has been charged).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leadPrice")
    public Double leadPrice;

    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withLeadPrice(Double leadPrice) {
        this.leadPrice = leadPrice;
        return this;
    }
    
    /**
     * Lead type.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leadType")
    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum leadType;

    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withLeadType(GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum leadType) {
        this.leadType = leadType;
        return this;
    }
    
    /**
     * Container for message lead specific information.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageLead")
    public GoogleAdsHomeservicesLocalservicesV1MessageLead messageLead;

    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withMessageLead(GoogleAdsHomeservicesLocalservicesV1MessageLead messageLead) {
        this.messageLead = messageLead;
        return this;
    }
    
    /**
     * Container for phone lead specific information.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneLead")
    public GoogleAdsHomeservicesLocalservicesV1PhoneLead phoneLead;

    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withPhoneLead(GoogleAdsHomeservicesLocalservicesV1PhoneLead phoneLead) {
        this.phoneLead = phoneLead;
        return this;
    }
    
    /**
     * Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public GoogleTypeTimeZone timezone;

    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withTimezone(GoogleTypeTimeZone timezone) {
        this.timezone = timezone;
        return this;
    }
    
    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport(){}
}
