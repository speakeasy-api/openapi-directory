package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * V2GetKeyStringResponse
 * Response message for `GetKeyString` method.
**/
public class V2GetKeyStringResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyString")
    public String keyString;
    public V2GetKeyStringResponse withKeyString(String keyString) {
        this.keyString = keyString;
        return this;
    }
}