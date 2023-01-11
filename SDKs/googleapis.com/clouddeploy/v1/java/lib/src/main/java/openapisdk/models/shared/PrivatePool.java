package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PrivatePool
 * Execution using a private Cloud Build pool.
**/
public class PrivatePool {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artifactStorage")
    public String artifactStorage;
    public PrivatePool withArtifactStorage(String artifactStorage) {
        this.artifactStorage = artifactStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public PrivatePool withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workerPool")
    public String workerPool;
    public PrivatePool withWorkerPool(String workerPool) {
        this.workerPool = workerPool;
        return this;
    }
}