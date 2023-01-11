package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubaccountAddResponseEtat {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etat")
    public SubaccountAddResponseEtatEtat[] etat;
    public SubaccountAddResponseEtat withEtat(SubaccountAddResponseEtatEtat[] etat) {
        this.etat = etat;
        return this;
    }
}