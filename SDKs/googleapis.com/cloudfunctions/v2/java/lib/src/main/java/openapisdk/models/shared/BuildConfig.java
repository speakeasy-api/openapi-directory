package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BuildConfig
 * Describes the Build step of the function that builds a container from the given source.
**/
public class BuildConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build")
    public String build;
    public BuildConfig withBuild(String build) {
        this.build = build;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildpackStack")
    public String buildpackStack;
    public BuildConfig withBuildpackStack(String buildpackStack) {
        this.buildpackStack = buildpackStack;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dockerRegistry")
    public BuildConfigDockerRegistryEnum dockerRegistry;
    public BuildConfig withDockerRegistry(BuildConfigDockerRegistryEnum dockerRegistry) {
        this.dockerRegistry = dockerRegistry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dockerRepository")
    public String dockerRepository;
    public BuildConfig withDockerRepository(String dockerRepository) {
        this.dockerRepository = dockerRepository;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entryPoint")
    public String entryPoint;
    public BuildConfig withEntryPoint(String entryPoint) {
        this.entryPoint = entryPoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentVariables")
    public java.util.Map<String, String> environmentVariables;
    public BuildConfig withEnvironmentVariables(java.util.Map<String, String> environmentVariables) {
        this.environmentVariables = environmentVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runtime")
    public String runtime;
    public BuildConfig withRuntime(String runtime) {
        this.runtime = runtime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public Source source;
    public BuildConfig withSource(Source source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceProvenance")
    public SourceProvenance sourceProvenance;
    public BuildConfig withSourceProvenance(SourceProvenance sourceProvenance) {
        this.sourceProvenance = sourceProvenance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workerPool")
    public String workerPool;
    public BuildConfig withWorkerPool(String workerPool) {
        this.workerPool = workerPool;
        return this;
    }
}