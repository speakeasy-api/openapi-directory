package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceSpec
 * InstanceSpec is a description of an instance.
**/
public class InstanceSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeDeadlineSeconds")
    public String activeDeadlineSeconds;
    public InstanceSpec withActiveDeadlineSeconds(String activeDeadlineSeconds) {
        this.activeDeadlineSeconds = activeDeadlineSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containers")
    public Container[] containers;
    public InstanceSpec withContainers(Container[] containers) {
        this.containers = containers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restartPolicy")
    public String restartPolicy;
    public InstanceSpec withRestartPolicy(String restartPolicy) {
        this.restartPolicy = restartPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccountName")
    public String serviceAccountName;
    public InstanceSpec withServiceAccountName(String serviceAccountName) {
        this.serviceAccountName = serviceAccountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terminationGracePeriodSeconds")
    public String terminationGracePeriodSeconds;
    public InstanceSpec withTerminationGracePeriodSeconds(String terminationGracePeriodSeconds) {
        this.terminationGracePeriodSeconds = terminationGracePeriodSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumes")
    public Volume[] volumes;
    public InstanceSpec withVolumes(Volume[] volumes) {
        this.volumes = volumes;
        return this;
    }
}