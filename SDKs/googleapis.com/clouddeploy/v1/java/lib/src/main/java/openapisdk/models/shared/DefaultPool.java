package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DefaultPool
 * Execution using the default Cloud Build pool.
**/
public class DefaultPool {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artifactStorage")
    public String artifactStorage;
    public DefaultPool withArtifactStorage(String artifactStorage) {
        this.artifactStorage = artifactStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public DefaultPool withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
}