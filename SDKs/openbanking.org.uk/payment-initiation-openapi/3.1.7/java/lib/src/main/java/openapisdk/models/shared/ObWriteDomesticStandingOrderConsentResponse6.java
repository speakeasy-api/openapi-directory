package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObWriteDomesticStandingOrderConsentResponse6 {
    @JsonProperty("Data")
    public ObWriteDomesticStandingOrderConsentResponse6Data data;
    public ObWriteDomesticStandingOrderConsentResponse6 withData(ObWriteDomesticStandingOrderConsentResponse6Data data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Links")
    public Links links;
    public ObWriteDomesticStandingOrderConsentResponse6 withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Meta")
    public Meta meta;
    public ObWriteDomesticStandingOrderConsentResponse6 withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("Risk")
    public ObRisk1 risk;
    public ObWriteDomesticStandingOrderConsentResponse6 withRisk(ObRisk1 risk) {
        this.risk = risk;
        return this;
    }
}