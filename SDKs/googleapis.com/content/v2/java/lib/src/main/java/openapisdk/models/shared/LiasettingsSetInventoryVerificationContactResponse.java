package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LiasettingsSetInventoryVerificationContactResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public LiasettingsSetInventoryVerificationContactResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}