package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreditResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etat")
    public Object etat;
    public CreditResponse withEtat(Object etat) {
        this.etat = etat;
        return this;
    }
}