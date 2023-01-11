package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObFundsConfirmationConsentResponse1 {
    @JsonProperty("Data")
    public ObFundsConfirmationConsentResponse1Data data;
    public ObFundsConfirmationConsentResponse1 withData(ObFundsConfirmationConsentResponse1Data data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Links")
    public Links links;
    public ObFundsConfirmationConsentResponse1 withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Meta")
    public Meta meta;
    public ObFundsConfirmationConsentResponse1 withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
}