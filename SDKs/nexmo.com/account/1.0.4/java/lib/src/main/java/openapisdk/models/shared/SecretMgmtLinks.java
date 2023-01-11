package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SecretMgmtLinks
 * Links related to this resource
**/
public class SecretMgmtLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public SecretMgmtLinksSelf self;
    public SecretMgmtLinks withSelf(SecretMgmtLinksSelf self) {
        this.self = self;
        return this;
    }
}