package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SendRfpRequest
 * Request to send an RFP. All fields in this request are proposed to publisher and subject to changes by publisher during later negotiation.
**/
public class SendRfpRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyerContacts")
    public Contact[] buyerContacts;
    public SendRfpRequest withBuyerContacts(Contact[] buyerContacts) {
        this.buyerContacts = buyerContacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client")
    public String client;
    public SendRfpRequest withClient(String client) {
        this.client = client;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public SendRfpRequest withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimatedGrossSpend")
    public Money estimatedGrossSpend;
    public SendRfpRequest withEstimatedGrossSpend(Money estimatedGrossSpend) {
        this.estimatedGrossSpend = estimatedGrossSpend;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flightEndTime")
    public String flightEndTime;
    public SendRfpRequest withFlightEndTime(String flightEndTime) {
        this.flightEndTime = flightEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flightStartTime")
    public String flightStartTime;
    public SendRfpRequest withFlightStartTime(String flightStartTime) {
        this.flightStartTime = flightStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geoTargeting")
    public CriteriaTargeting geoTargeting;
    public SendRfpRequest withGeoTargeting(CriteriaTargeting geoTargeting) {
        this.geoTargeting = geoTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventorySizeTargeting")
    public InventorySizeTargeting inventorySizeTargeting;
    public SendRfpRequest withInventorySizeTargeting(InventorySizeTargeting inventorySizeTargeting) {
        this.inventorySizeTargeting = inventorySizeTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public SendRfpRequest withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferredDealTerms")
    public PreferredDealTerms preferredDealTerms;
    public SendRfpRequest withPreferredDealTerms(PreferredDealTerms preferredDealTerms) {
        this.preferredDealTerms = preferredDealTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("programmaticGuaranteedTerms")
    public ProgrammaticGuaranteedTerms programmaticGuaranteedTerms;
    public SendRfpRequest withProgrammaticGuaranteedTerms(ProgrammaticGuaranteedTerms programmaticGuaranteedTerms) {
        this.programmaticGuaranteedTerms = programmaticGuaranteedTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherProfile")
    public String publisherProfile;
    public SendRfpRequest withPublisherProfile(String publisherProfile) {
        this.publisherProfile = publisherProfile;
        return this;
    }
}