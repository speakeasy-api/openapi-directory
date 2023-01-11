package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubaccountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etat")
    public SubaccountResponseEtat etat;
    public SubaccountResponse withEtat(SubaccountResponseEtat etat) {
        this.etat = etat;
        return this;
    }
}