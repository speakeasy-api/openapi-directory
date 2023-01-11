package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UsePurpose {
    @JsonProperty("code")
    public String code;
    public UsePurpose withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refUri")
    public String refUri;
    public UsePurpose withRefUri(String refUri) {
        this.refUri = refUri;
        return this;
    }
    @JsonProperty("text")
    public String text;
    public UsePurpose withText(String text) {
        this.text = text;
        return this;
    }
}