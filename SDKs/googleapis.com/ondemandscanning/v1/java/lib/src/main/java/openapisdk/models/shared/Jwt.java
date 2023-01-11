package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Jwt {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compactJwt")
    public String compactJwt;
    public Jwt withCompactJwt(String compactJwt) {
        this.compactJwt = compactJwt;
        return this;
    }
}