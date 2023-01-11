package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RepertoirEcreatereponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etat")
    public Object etat;
    public RepertoirEcreatereponse withEtat(Object etat) {
        this.etat = etat;
        return this;
    }
}