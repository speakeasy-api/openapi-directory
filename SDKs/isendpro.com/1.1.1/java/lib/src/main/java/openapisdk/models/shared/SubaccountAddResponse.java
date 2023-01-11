package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubaccountAddResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etat")
    public SubaccountAddResponseEtat etat;
    public SubaccountAddResponse withEtat(SubaccountAddResponseEtat etat) {
        this.etat = etat;
        return this;
    }
}