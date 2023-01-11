package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubaccountResponseEtat {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etat")
    public SubaccountResponseEtatEtat[] etat;
    public SubaccountResponseEtat withEtat(SubaccountResponseEtatEtat[] etat) {
        this.etat = etat;
        return this;
    }
}