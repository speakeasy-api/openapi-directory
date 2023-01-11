package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObWriteFundsConfirmationResponse1 {
    @JsonProperty("Data")
    public ObWriteFundsConfirmationResponse1Data data;
    public ObWriteFundsConfirmationResponse1 withData(ObWriteFundsConfirmationResponse1Data data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Links")
    public Links links;
    public ObWriteFundsConfirmationResponse1 withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Meta")
    public Meta meta;
    public ObWriteFundsConfirmationResponse1 withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
}