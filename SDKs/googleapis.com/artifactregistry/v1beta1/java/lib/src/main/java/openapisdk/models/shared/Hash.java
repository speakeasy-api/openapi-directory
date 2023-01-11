package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Hash
 * A hash of file content.
**/
public class Hash {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public HashTypeEnum type;
    public Hash withType(HashTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Hash withValue(String value) {
        this.value = value;
        return this;
    }
}