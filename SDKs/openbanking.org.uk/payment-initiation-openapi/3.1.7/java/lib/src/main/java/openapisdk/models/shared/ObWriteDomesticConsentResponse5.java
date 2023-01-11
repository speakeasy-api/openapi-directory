package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObWriteDomesticConsentResponse5 {
    @JsonProperty("Data")
    public ObWriteDomesticConsentResponse5Data data;
    public ObWriteDomesticConsentResponse5 withData(ObWriteDomesticConsentResponse5Data data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Links")
    public Links links;
    public ObWriteDomesticConsentResponse5 withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Meta")
    public Meta meta;
    public ObWriteDomesticConsentResponse5 withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("Risk")
    public ObRisk1 risk;
    public ObWriteDomesticConsentResponse5 withRisk(ObRisk1 risk) {
        this.risk = risk;
        return this;
    }
}