package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExecutionConfig
 * Configuration of the environment to use when calling Skaffold.
**/
public class ExecutionConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artifactStorage")
    public String artifactStorage;
    public ExecutionConfig withArtifactStorage(String artifactStorage) {
        this.artifactStorage = artifactStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultPool")
    public DefaultPool defaultPool;
    public ExecutionConfig withDefaultPool(DefaultPool defaultPool) {
        this.defaultPool = defaultPool;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionTimeout")
    public String executionTimeout;
    public ExecutionConfig withExecutionTimeout(String executionTimeout) {
        this.executionTimeout = executionTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privatePool")
    public PrivatePool privatePool;
    public ExecutionConfig withPrivatePool(PrivatePool privatePool) {
        this.privatePool = privatePool;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public ExecutionConfig withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usages")
    public ExecutionConfigUsagesEnum[] usages;
    public ExecutionConfig withUsages(ExecutionConfigUsagesEnum[] usages) {
        this.usages = usages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workerPool")
    public String workerPool;
    public ExecutionConfig withWorkerPool(String workerPool) {
        this.workerPool = workerPool;
        return this;
    }
}