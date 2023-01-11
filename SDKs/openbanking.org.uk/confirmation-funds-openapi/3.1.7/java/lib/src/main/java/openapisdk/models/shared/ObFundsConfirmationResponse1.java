package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObFundsConfirmationResponse1 {
    @JsonProperty("Data")
    public ObFundsConfirmationResponse1Data data;
    public ObFundsConfirmationResponse1 withData(ObFundsConfirmationResponse1Data data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Links")
    public Links links;
    public ObFundsConfirmationResponse1 withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Meta")
    public Meta meta;
    public ObFundsConfirmationResponse1 withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
}