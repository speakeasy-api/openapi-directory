package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Credential
 * The credential used by Deployment Manager and TypeProvider. Only one of the options is permitted.
**/
public class Credential {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicAuth")
    public BasicAuth basicAuth;
    public Credential withBasicAuth(BasicAuth basicAuth) {
        this.basicAuth = basicAuth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public ServiceAccount serviceAccount;
    public Credential withServiceAccount(ServiceAccount serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useProjectDefault")
    public Boolean useProjectDefault;
    public Credential withUseProjectDefault(Boolean useProjectDefault) {
        this.useProjectDefault = useProjectDefault;
        return this;
    }
}