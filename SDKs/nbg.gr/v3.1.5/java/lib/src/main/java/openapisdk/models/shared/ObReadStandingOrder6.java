package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObReadStandingOrder6 {
    @JsonProperty("Data")
    public ObReadDataStandingOrder5 data;
    public ObReadStandingOrder6 withData(ObReadDataStandingOrder5 data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Links")
    public Links links;
    public ObReadStandingOrder6 withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Meta")
    public Meta meta;
    public ObReadStandingOrder6 withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
}