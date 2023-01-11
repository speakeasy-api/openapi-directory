package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObWriteInternationalConsentResponse6 {
    @JsonProperty("Data")
    public ObWriteInternationalConsentResponse6Data data;
    public ObWriteInternationalConsentResponse6 withData(ObWriteInternationalConsentResponse6Data data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Links")
    public Links links;
    public ObWriteInternationalConsentResponse6 withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Meta")
    public Meta meta;
    public ObWriteInternationalConsentResponse6 withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("Risk")
    public ObRisk1 risk;
    public ObWriteInternationalConsentResponse6 withRisk(ObRisk1 risk) {
        this.risk = risk;
        return this;
    }
}