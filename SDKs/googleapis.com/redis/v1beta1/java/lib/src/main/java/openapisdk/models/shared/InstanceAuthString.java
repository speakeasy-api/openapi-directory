package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceAuthString
 * Instance AUTH string details.
**/
public class InstanceAuthString {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authString")
    public String authString;
    public InstanceAuthString withAuthString(String authString) {
        this.authString = authString;
        return this;
    }
}