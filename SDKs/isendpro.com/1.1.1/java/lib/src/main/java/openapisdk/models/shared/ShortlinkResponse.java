package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ShortlinkResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etat")
    public ShortlinkResponseEtat etat;
    public ShortlinkResponse withEtat(ShortlinkResponseEtat etat) {
        this.etat = etat;
        return this;
    }
}