package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Container
 * A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments may be supplied by the system to the container at runtime.
**/
public class Container {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("args")
    public String[] args;
    public Container withArgs(String[] args) {
        this.args = args;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("command")
    public String[] command;
    public Container withCommand(String[] command) {
        this.command = command;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("env")
    public EnvVar[] env;
    public Container withEnv(EnvVar[] env) {
        this.env = env;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("envFrom")
    public EnvFromSource[] envFrom;
    public Container withEnvFrom(EnvFromSource[] envFrom) {
        this.envFrom = envFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public Container withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imagePullPolicy")
    public String imagePullPolicy;
    public Container withImagePullPolicy(String imagePullPolicy) {
        this.imagePullPolicy = imagePullPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("livenessProbe")
    public Probe livenessProbe;
    public Container withLivenessProbe(Probe livenessProbe) {
        this.livenessProbe = livenessProbe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Container withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ports")
    public ContainerPort[] ports;
    public Container withPorts(ContainerPort[] ports) {
        this.ports = ports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readinessProbe")
    public Probe readinessProbe;
    public Container withReadinessProbe(Probe readinessProbe) {
        this.readinessProbe = readinessProbe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public ResourceRequirements resources;
    public Container withResources(ResourceRequirements resources) {
        this.resources = resources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityContext")
    public SecurityContext securityContext;
    public Container withSecurityContext(SecurityContext securityContext) {
        this.securityContext = securityContext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startupProbe")
    public Probe startupProbe;
    public Container withStartupProbe(Probe startupProbe) {
        this.startupProbe = startupProbe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terminationMessagePath")
    public String terminationMessagePath;
    public Container withTerminationMessagePath(String terminationMessagePath) {
        this.terminationMessagePath = terminationMessagePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terminationMessagePolicy")
    public String terminationMessagePolicy;
    public Container withTerminationMessagePolicy(String terminationMessagePolicy) {
        this.terminationMessagePolicy = terminationMessagePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeMounts")
    public VolumeMount[] volumeMounts;
    public Container withVolumeMounts(VolumeMount[] volumeMounts) {
        this.volumeMounts = volumeMounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workingDir")
    public String workingDir;
    public Container withWorkingDir(String workingDir) {
        this.workingDir = workingDir;
        return this;
    }
}