package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObReadConsentResponse1 {
    @JsonProperty("Data")
    public ObReadDataConsentResponse1 data;
    public ObReadConsentResponse1 withData(ObReadDataConsentResponse1 data) {
        this.data = data;
        return this;
    }
    @JsonProperty("Links")
    public Links links;
    public ObReadConsentResponse1 withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonProperty("Meta")
    public Meta meta;
    public ObReadConsentResponse1 withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("Risk")
    public java.util.Map<String, Object> risk;
    public ObReadConsentResponse1 withRisk(java.util.Map<String, Object> risk) {
        this.risk = risk;
        return this;
    }
}