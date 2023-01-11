package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObWriteDomesticScheduledConsentResponse5 {
    @JsonProperty("Data")
    public ObWriteDomesticScheduledConsentResponse5Data data;
    public ObWriteDomesticScheduledConsentResponse5 withData(ObWriteDomesticScheduledConsentResponse5Data data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Links")
    public Links links;
    public ObWriteDomesticScheduledConsentResponse5 withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Meta")
    public Meta meta;
    public ObWriteDomesticScheduledConsentResponse5 withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("Risk")
    public ObRisk1 risk;
    public ObWriteDomesticScheduledConsentResponse5 withRisk(ObRisk1 risk) {
        this.risk = risk;
        return this;
    }
}