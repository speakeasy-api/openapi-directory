package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObWriteInternationalStandingOrderConsentResponse7 {
    @JsonProperty("Data")
    public ObWriteInternationalStandingOrderConsentResponse7Data data;
    public ObWriteInternationalStandingOrderConsentResponse7 withData(ObWriteInternationalStandingOrderConsentResponse7Data data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Links")
    public Links links;
    public ObWriteInternationalStandingOrderConsentResponse7 withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Meta")
    public Meta meta;
    public ObWriteInternationalStandingOrderConsentResponse7 withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("Risk")
    public ObRisk1 risk;
    public ObWriteInternationalStandingOrderConsentResponse7 withRisk(ObRisk1 risk) {
        this.risk = risk;
        return this;
    }
}