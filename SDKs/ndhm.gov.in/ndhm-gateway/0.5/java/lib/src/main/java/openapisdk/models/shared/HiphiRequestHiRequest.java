package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HiphiRequestHiRequest {
    @JsonProperty("consent")
    public Consent consent;
    public HiphiRequestHiRequest withConsent(Consent consent) {
        this.consent = consent;
        return this;
    }
    @JsonProperty("dataPushUrl")
    public String dataPushUrl;
    public HiphiRequestHiRequest withDataPushUrl(String dataPushUrl) {
        this.dataPushUrl = dataPushUrl;
        return this;
    }
    @JsonProperty("dateRange")
    public DateRange dateRange;
    public HiphiRequestHiRequest withDateRange(DateRange dateRange) {
        this.dateRange = dateRange;
        return this;
    }
    @JsonProperty("keyMaterial")
    public KeyMaterial keyMaterial;
    public HiphiRequestHiRequest withKeyMaterial(KeyMaterial keyMaterial) {
        this.keyMaterial = keyMaterial;
        return this;
    }
}