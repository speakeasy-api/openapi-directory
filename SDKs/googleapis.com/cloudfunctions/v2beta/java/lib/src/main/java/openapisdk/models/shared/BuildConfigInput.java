package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BuildConfigInput
 * Describes the Build step of the function that builds a container from the given source.
**/
public class BuildConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildpackStack")
    public String buildpackStack;
    public BuildConfigInput withBuildpackStack(String buildpackStack) {
        this.buildpackStack = buildpackStack;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dockerRegistry")
    public BuildConfigDockerRegistryEnum dockerRegistry;
    public BuildConfigInput withDockerRegistry(BuildConfigDockerRegistryEnum dockerRegistry) {
        this.dockerRegistry = dockerRegistry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dockerRepository")
    public String dockerRepository;
    public BuildConfigInput withDockerRepository(String dockerRepository) {
        this.dockerRepository = dockerRepository;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entryPoint")
    public String entryPoint;
    public BuildConfigInput withEntryPoint(String entryPoint) {
        this.entryPoint = entryPoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentVariables")
    public java.util.Map<String, String> environmentVariables;
    public BuildConfigInput withEnvironmentVariables(java.util.Map<String, String> environmentVariables) {
        this.environmentVariables = environmentVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runtime")
    public String runtime;
    public BuildConfigInput withRuntime(String runtime) {
        this.runtime = runtime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public Source source;
    public BuildConfigInput withSource(Source source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceProvenance")
    public SourceProvenance sourceProvenance;
    public BuildConfigInput withSourceProvenance(SourceProvenance sourceProvenance) {
        this.sourceProvenance = sourceProvenance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workerPool")
    public String workerPool;
    public BuildConfigInput withWorkerPool(String workerPool) {
        this.workerPool = workerPool;
        return this;
    }
}