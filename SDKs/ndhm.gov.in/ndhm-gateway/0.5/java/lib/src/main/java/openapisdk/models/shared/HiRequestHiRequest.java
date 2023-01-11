package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HiRequestHiRequest {
    @JsonProperty("consent")
    public Consent consent;
    public HiRequestHiRequest withConsent(Consent consent) {
        this.consent = consent;
        return this;
    }
    @JsonProperty("dataPushUrl")
    public String dataPushUrl;
    public HiRequestHiRequest withDataPushUrl(String dataPushUrl) {
        this.dataPushUrl = dataPushUrl;
        return this;
    }
    @JsonProperty("dateRange")
    public DateRange dateRange;
    public HiRequestHiRequest withDateRange(DateRange dateRange) {
        this.dateRange = dateRange;
        return this;
    }
    @JsonProperty("keyMaterial")
    public KeyMaterial keyMaterial;
    public HiRequestHiRequest withKeyMaterial(KeyMaterial keyMaterial) {
        this.keyMaterial = keyMaterial;
        return this;
    }
}