package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Error {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public Error withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Error withDescription(String description) {
        this.description = description;
        return this;
    }
}