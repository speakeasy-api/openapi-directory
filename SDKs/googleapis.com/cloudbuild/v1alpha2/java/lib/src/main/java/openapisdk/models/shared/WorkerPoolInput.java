package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkerPoolInput
 * Configuration for a WorkerPool to run the builds. Workers are machines that Cloud Build uses to run your builds. By default, all workers run in a project owned by Cloud Build. To have full control over the workers that execute your builds -- such as enabling them to access private resources on your private network -- you can request Cloud Build to run the workers in your own project by creating a custom workers pool.
**/
public class WorkerPoolInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkConfig")
    public NetworkConfig networkConfig;
    public WorkerPoolInput withNetworkConfig(NetworkConfig networkConfig) {
        this.networkConfig = networkConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public WorkerPoolInput withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workerConfig")
    public WorkerConfig workerConfig;
    public WorkerPoolInput withWorkerConfig(WorkerConfig workerConfig) {
        this.workerConfig = workerConfig;
        return this;
    }
}