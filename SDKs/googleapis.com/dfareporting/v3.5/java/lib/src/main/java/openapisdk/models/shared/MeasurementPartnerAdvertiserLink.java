package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MeasurementPartnerAdvertiserLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkStatus")
    public MeasurementPartnerAdvertiserLinkLinkStatusEnum linkStatus;
    public MeasurementPartnerAdvertiserLink withLinkStatus(MeasurementPartnerAdvertiserLinkLinkStatusEnum linkStatus) {
        this.linkStatus = linkStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("measurementPartner")
    public MeasurementPartnerAdvertiserLinkMeasurementPartnerEnum measurementPartner;
    public MeasurementPartnerAdvertiserLink withMeasurementPartner(MeasurementPartnerAdvertiserLinkMeasurementPartnerEnum measurementPartner) {
        this.measurementPartner = measurementPartner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerAdvertiserId")
    public String partnerAdvertiserId;
    public MeasurementPartnerAdvertiserLink withPartnerAdvertiserId(String partnerAdvertiserId) {
        this.partnerAdvertiserId = partnerAdvertiserId;
        return this;
    }
}