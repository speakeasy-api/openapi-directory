package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Network
 * Extra network settings. Only applicable in the App Engine flexible environment.
**/
public class Network {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forwardedPorts")
    public String[] forwardedPorts;
    public Network withForwardedPorts(String[] forwardedPorts) {
        this.forwardedPorts = forwardedPorts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceIpMode")
    public NetworkInstanceIpModeEnum instanceIpMode;
    public Network withInstanceIpMode(NetworkInstanceIpModeEnum instanceIpMode) {
        this.instanceIpMode = instanceIpMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceTag")
    public String instanceTag;
    public Network withInstanceTag(String instanceTag) {
        this.instanceTag = instanceTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Network withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionAffinity")
    public Boolean sessionAffinity;
    public Network withSessionAffinity(Boolean sessionAffinity) {
        this.sessionAffinity = sessionAffinity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnetworkName")
    public String subnetworkName;
    public Network withSubnetworkName(String subnetworkName) {
        this.subnetworkName = subnetworkName;
        return this;
    }
}