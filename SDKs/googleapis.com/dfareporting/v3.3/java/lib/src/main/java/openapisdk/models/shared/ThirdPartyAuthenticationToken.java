package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ThirdPartyAuthenticationToken
 * Third Party Authentication Token
**/
public class ThirdPartyAuthenticationToken {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ThirdPartyAuthenticationToken withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ThirdPartyAuthenticationToken withValue(String value) {
        this.value = value;
        return this;
    }
}