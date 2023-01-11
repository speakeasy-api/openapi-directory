package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Action
 * Specifies a single action that runs a Docker container.
**/
public class Action {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alwaysRun")
    public Boolean alwaysRun;
    public Action withAlwaysRun(Boolean alwaysRun) {
        this.alwaysRun = alwaysRun;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockExternalNetwork")
    public Boolean blockExternalNetwork;
    public Action withBlockExternalNetwork(Boolean blockExternalNetwork) {
        this.blockExternalNetwork = blockExternalNetwork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commands")
    public String[] commands;
    public Action withCommands(String[] commands) {
        this.commands = commands;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerName")
    public String containerName;
    public Action withContainerName(String containerName) {
        this.containerName = containerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credentials")
    public Secret credentials;
    public Action withCredentials(Secret credentials) {
        this.credentials = credentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableImagePrefetch")
    public Boolean disableImagePrefetch;
    public Action withDisableImagePrefetch(Boolean disableImagePrefetch) {
        this.disableImagePrefetch = disableImagePrefetch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableStandardErrorCapture")
    public Boolean disableStandardErrorCapture;
    public Action withDisableStandardErrorCapture(Boolean disableStandardErrorCapture) {
        this.disableStandardErrorCapture = disableStandardErrorCapture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableFuse")
    public Boolean enableFuse;
    public Action withEnableFuse(Boolean enableFuse) {
        this.enableFuse = enableFuse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptedEnvironment")
    public Secret encryptedEnvironment;
    public Action withEncryptedEnvironment(Secret encryptedEnvironment) {
        this.encryptedEnvironment = encryptedEnvironment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entrypoint")
    public String entrypoint;
    public Action withEntrypoint(String entrypoint) {
        this.entrypoint = entrypoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public java.util.Map<String, String> environment;
    public Action withEnvironment(java.util.Map<String, String> environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignoreExitStatus")
    public Boolean ignoreExitStatus;
    public Action withIgnoreExitStatus(Boolean ignoreExitStatus) {
        this.ignoreExitStatus = ignoreExitStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageUri")
    public String imageUri;
    public Action withImageUri(String imageUri) {
        this.imageUri = imageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Action withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mounts")
    public Mount[] mounts;
    public Action withMounts(Mount[] mounts) {
        this.mounts = mounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pidNamespace")
    public String pidNamespace;
    public Action withPidNamespace(String pidNamespace) {
        this.pidNamespace = pidNamespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portMappings")
    public java.util.Map<String, Integer> portMappings;
    public Action withPortMappings(java.util.Map<String, Integer> portMappings) {
        this.portMappings = portMappings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishExposedPorts")
    public Boolean publishExposedPorts;
    public Action withPublishExposedPorts(Boolean publishExposedPorts) {
        this.publishExposedPorts = publishExposedPorts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runInBackground")
    public Boolean runInBackground;
    public Action withRunInBackground(Boolean runInBackground) {
        this.runInBackground = runInBackground;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public String timeout;
    public Action withTimeout(String timeout) {
        this.timeout = timeout;
        return this;
    }
}