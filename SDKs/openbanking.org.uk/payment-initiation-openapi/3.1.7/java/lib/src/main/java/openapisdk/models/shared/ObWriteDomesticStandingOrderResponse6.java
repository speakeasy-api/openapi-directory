package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObWriteDomesticStandingOrderResponse6 {
    @JsonProperty("Data")
    public ObWriteDomesticStandingOrderResponse6Data data;
    public ObWriteDomesticStandingOrderResponse6 withData(ObWriteDomesticStandingOrderResponse6Data data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Links")
    public Links links;
    public ObWriteDomesticStandingOrderResponse6 withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Meta")
    public Meta meta;
    public ObWriteDomesticStandingOrderResponse6 withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
}