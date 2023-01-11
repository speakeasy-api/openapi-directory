package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2Container
 * A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments may be supplied by the system to the container at runtime.
**/
public class GoogleCloudRunV2Container {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("args")
    public String[] args;
    public GoogleCloudRunV2Container withArgs(String[] args) {
        this.args = args;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("command")
    public String[] command;
    public GoogleCloudRunV2Container withCommand(String[] command) {
        this.command = command;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("env")
    public GoogleCloudRunV2EnvVar[] env;
    public GoogleCloudRunV2Container withEnv(GoogleCloudRunV2EnvVar[] env) {
        this.env = env;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public GoogleCloudRunV2Container withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("livenessProbe")
    public GoogleCloudRunV2Probe livenessProbe;
    public GoogleCloudRunV2Container withLivenessProbe(GoogleCloudRunV2Probe livenessProbe) {
        this.livenessProbe = livenessProbe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudRunV2Container withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ports")
    public GoogleCloudRunV2ContainerPort[] ports;
    public GoogleCloudRunV2Container withPorts(GoogleCloudRunV2ContainerPort[] ports) {
        this.ports = ports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public GoogleCloudRunV2ResourceRequirements resources;
    public GoogleCloudRunV2Container withResources(GoogleCloudRunV2ResourceRequirements resources) {
        this.resources = resources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startupProbe")
    public GoogleCloudRunV2Probe startupProbe;
    public GoogleCloudRunV2Container withStartupProbe(GoogleCloudRunV2Probe startupProbe) {
        this.startupProbe = startupProbe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeMounts")
    public GoogleCloudRunV2VolumeMount[] volumeMounts;
    public GoogleCloudRunV2Container withVolumeMounts(GoogleCloudRunV2VolumeMount[] volumeMounts) {
        this.volumeMounts = volumeMounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workingDir")
    public String workingDir;
    public GoogleCloudRunV2Container withWorkingDir(String workingDir) {
        this.workingDir = workingDir;
        return this;
    }
}