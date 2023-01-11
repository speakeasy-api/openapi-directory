package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Identifier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public IdentifierTypeEnum type;
    public Identifier withType(IdentifierTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Identifier withValue(String value) {
        this.value = value;
        return this;
    }
}