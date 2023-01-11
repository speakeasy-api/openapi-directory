package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RevisionSpec
 * RevisionSpec holds the desired state of the Revision (from the client).
**/
public class RevisionSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerConcurrency")
    public Integer containerConcurrency;
    public RevisionSpec withContainerConcurrency(Integer containerConcurrency) {
        this.containerConcurrency = containerConcurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containers")
    public Container[] containers;
    public RevisionSpec withContainers(Container[] containers) {
        this.containers = containers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableServiceLinks")
    public Boolean enableServiceLinks;
    public RevisionSpec withEnableServiceLinks(Boolean enableServiceLinks) {
        this.enableServiceLinks = enableServiceLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imagePullSecrets")
    public LocalObjectReference[] imagePullSecrets;
    public RevisionSpec withImagePullSecrets(LocalObjectReference[] imagePullSecrets) {
        this.imagePullSecrets = imagePullSecrets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccountName")
    public String serviceAccountName;
    public RevisionSpec withServiceAccountName(String serviceAccountName) {
        this.serviceAccountName = serviceAccountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutSeconds")
    public Integer timeoutSeconds;
    public RevisionSpec withTimeoutSeconds(Integer timeoutSeconds) {
        this.timeoutSeconds = timeoutSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumes")
    public Volume[] volumes;
    public RevisionSpec withVolumes(Volume[] volumes) {
        this.volumes = volumes;
        return this;
    }
}