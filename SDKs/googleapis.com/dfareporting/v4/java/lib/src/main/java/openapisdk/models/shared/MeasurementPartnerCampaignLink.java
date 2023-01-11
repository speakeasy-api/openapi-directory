package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MeasurementPartnerCampaignLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkStatus")
    public MeasurementPartnerCampaignLinkLinkStatusEnum linkStatus;
    public MeasurementPartnerCampaignLink withLinkStatus(MeasurementPartnerCampaignLinkLinkStatusEnum linkStatus) {
        this.linkStatus = linkStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("measurementPartner")
    public MeasurementPartnerCampaignLinkMeasurementPartnerEnum measurementPartner;
    public MeasurementPartnerCampaignLink withMeasurementPartner(MeasurementPartnerCampaignLinkMeasurementPartnerEnum measurementPartner) {
        this.measurementPartner = measurementPartner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerCampaignId")
    public String partnerCampaignId;
    public MeasurementPartnerCampaignLink withPartnerCampaignId(String partnerCampaignId) {
        this.partnerCampaignId = partnerCampaignId;
        return this;
    }
}