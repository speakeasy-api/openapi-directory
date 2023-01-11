package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObReadScheduledPayment3 {
    @JsonProperty("Data")
    public ObReadDataScheduledPayment3 data;
    public ObReadScheduledPayment3 withData(ObReadDataScheduledPayment3 data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Links")
    public Links links;
    public ObReadScheduledPayment3 withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Meta")
    public Meta meta;
    public ObReadScheduledPayment3 withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
}