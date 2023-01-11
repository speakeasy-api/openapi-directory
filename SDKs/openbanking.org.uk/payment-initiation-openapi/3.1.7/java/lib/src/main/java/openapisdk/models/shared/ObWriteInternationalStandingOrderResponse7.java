package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObWriteInternationalStandingOrderResponse7 {
    @JsonProperty("Data")
    public ObWriteInternationalStandingOrderResponse7Data data;
    public ObWriteInternationalStandingOrderResponse7 withData(ObWriteInternationalStandingOrderResponse7Data data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Links")
    public Links links;
    public ObWriteInternationalStandingOrderResponse7 withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Meta")
    public Meta meta;
    public ObWriteInternationalStandingOrderResponse7 withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
}