package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport
 * A Detailed Lead Report of a lead identified by their lead id and contains consumer, account, monetization, and lead data.
**/
public class GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregatorInfo")
    public GoogleAdsHomeservicesLocalservicesV1AggregatorInfo aggregatorInfo;
    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withAggregatorInfo(GoogleAdsHomeservicesLocalservicesV1AggregatorInfo aggregatorInfo) {
        this.aggregatorInfo = aggregatorInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingLead")
    public GoogleAdsHomeservicesLocalservicesV1BookingLead bookingLead;
    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withBookingLead(GoogleAdsHomeservicesLocalservicesV1BookingLead bookingLead) {
        this.bookingLead = bookingLead;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessName")
    public String businessName;
    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withBusinessName(String businessName) {
        this.businessName = businessName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeStatus")
    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum chargeStatus;
    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withChargeStatus(GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum chargeStatus) {
        this.chargeStatus = chargeStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disputeStatus")
    public String disputeStatus;
    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withDisputeStatus(String disputeStatus) {
        this.disputeStatus = disputeStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geo")
    public String geo;
    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withGeo(String geo) {
        this.geo = geo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leadCategory")
    public String leadCategory;
    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withLeadCategory(String leadCategory) {
        this.leadCategory = leadCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leadCreationTimestamp")
    public String leadCreationTimestamp;
    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withLeadCreationTimestamp(String leadCreationTimestamp) {
        this.leadCreationTimestamp = leadCreationTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leadId")
    public String leadId;
    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withLeadId(String leadId) {
        this.leadId = leadId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leadPrice")
    public Double leadPrice;
    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withLeadPrice(Double leadPrice) {
        this.leadPrice = leadPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leadType")
    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum leadType;
    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withLeadType(GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum leadType) {
        this.leadType = leadType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageLead")
    public GoogleAdsHomeservicesLocalservicesV1MessageLead messageLead;
    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withMessageLead(GoogleAdsHomeservicesLocalservicesV1MessageLead messageLead) {
        this.messageLead = messageLead;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneLead")
    public GoogleAdsHomeservicesLocalservicesV1PhoneLead phoneLead;
    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withPhoneLead(GoogleAdsHomeservicesLocalservicesV1PhoneLead phoneLead) {
        this.phoneLead = phoneLead;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public GoogleTypeTimeZone timezone;
    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport withTimezone(GoogleTypeTimeZone timezone) {
        this.timezone = timezone;
        return this;
    }
}