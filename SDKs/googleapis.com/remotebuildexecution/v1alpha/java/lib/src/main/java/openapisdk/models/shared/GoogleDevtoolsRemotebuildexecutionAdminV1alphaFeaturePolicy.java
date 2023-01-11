package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy
 * FeaturePolicy defines features allowed to be used on RBE instances, as well as instance-wide behavior changes that take effect without opt-in or opt-out at usage time.
**/
public class GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionHermeticity")
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnum actionHermeticity;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy withActionHermeticity(GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnum actionHermeticity) {
        this.actionHermeticity = actionHermeticity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionIsolation")
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnum actionIsolation;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy withActionIsolation(GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnum actionIsolation) {
        this.actionIsolation = actionIsolation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerImageSources")
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature containerImageSources;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy withContainerImageSources(GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature containerImageSources) {
        this.containerImageSources = containerImageSources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dockerAddCapabilities")
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature dockerAddCapabilities;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy withDockerAddCapabilities(GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature dockerAddCapabilities) {
        this.dockerAddCapabilities = dockerAddCapabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dockerChrootPath")
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature dockerChrootPath;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy withDockerChrootPath(GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature dockerChrootPath) {
        this.dockerChrootPath = dockerChrootPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dockerNetwork")
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature dockerNetwork;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy withDockerNetwork(GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature dockerNetwork) {
        this.dockerNetwork = dockerNetwork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dockerPrivileged")
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature dockerPrivileged;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy withDockerPrivileged(GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature dockerPrivileged) {
        this.dockerPrivileged = dockerPrivileged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dockerRunAsContainerProvidedUser")
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature dockerRunAsContainerProvidedUser;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy withDockerRunAsContainerProvidedUser(GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature dockerRunAsContainerProvidedUser) {
        this.dockerRunAsContainerProvidedUser = dockerRunAsContainerProvidedUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dockerRunAsRoot")
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature dockerRunAsRoot;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy withDockerRunAsRoot(GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature dockerRunAsRoot) {
        this.dockerRunAsRoot = dockerRunAsRoot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dockerRuntime")
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature dockerRuntime;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy withDockerRuntime(GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature dockerRuntime) {
        this.dockerRuntime = dockerRuntime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dockerSiblingContainers")
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature dockerSiblingContainers;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy withDockerSiblingContainers(GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature dockerSiblingContainers) {
        this.dockerSiblingContainers = dockerSiblingContainers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linuxExecution")
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnum linuxExecution;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy withLinuxExecution(GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnum linuxExecution) {
        this.linuxExecution = linuxExecution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linuxIsolation")
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum linuxIsolation;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy withLinuxIsolation(GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum linuxIsolation) {
        this.linuxIsolation = linuxIsolation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("macExecution")
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecutionEnum macExecution;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy withMacExecution(GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecutionEnum macExecution) {
        this.macExecution = macExecution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmVerification")
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerificationEnum vmVerification;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy withVmVerification(GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerificationEnum vmVerification) {
        this.vmVerification = vmVerification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("windowsExecution")
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnum windowsExecution;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy withWindowsExecution(GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnum windowsExecution) {
        this.windowsExecution = windowsExecution;
        return this;
    }
}