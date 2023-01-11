package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentityAwareProxyClientInput
 * Contains the data that describes an Identity Aware Proxy owned client.
**/
public class IdentityAwareProxyClientInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public IdentityAwareProxyClientInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
}