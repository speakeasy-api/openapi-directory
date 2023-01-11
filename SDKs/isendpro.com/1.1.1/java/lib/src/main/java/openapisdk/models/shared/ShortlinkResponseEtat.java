package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ShortlinkResponseEtat {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etat")
    public ShortlinkResponseEtatEtat[] etat;
    public ShortlinkResponseEtat withEtat(ShortlinkResponseEtatEtat[] etat) {
        this.etat = etat;
        return this;
    }
}