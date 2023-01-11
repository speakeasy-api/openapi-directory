package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObWritePaymentDetailsResponse1 {
    @JsonProperty("Data")
    public ObWritePaymentDetailsResponse1Data data;
    public ObWritePaymentDetailsResponse1 withData(ObWritePaymentDetailsResponse1Data data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Links")
    public Links links;
    public ObWritePaymentDetailsResponse1 withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Meta")
    public Meta meta;
    public ObWritePaymentDetailsResponse1 withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
}