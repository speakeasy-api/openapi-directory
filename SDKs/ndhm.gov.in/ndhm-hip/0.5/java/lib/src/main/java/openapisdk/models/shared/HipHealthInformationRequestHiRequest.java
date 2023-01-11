package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HipHealthInformationRequestHiRequest {
    @JsonProperty("consent")
    public Consent consent;
    public HipHealthInformationRequestHiRequest withConsent(Consent consent) {
        this.consent = consent;
        return this;
    }
    @JsonProperty("dataPushUrl")
    public String dataPushUrl;
    public HipHealthInformationRequestHiRequest withDataPushUrl(String dataPushUrl) {
        this.dataPushUrl = dataPushUrl;
        return this;
    }
    @JsonProperty("dateRange")
    public DateRange dateRange;
    public HipHealthInformationRequestHiRequest withDateRange(DateRange dateRange) {
        this.dateRange = dateRange;
        return this;
    }
    @JsonProperty("keyMaterial")
    public KeyMaterial keyMaterial;
    public HipHealthInformationRequestHiRequest withKeyMaterial(KeyMaterial keyMaterial) {
        this.keyMaterial = keyMaterial;
        return this;
    }
}