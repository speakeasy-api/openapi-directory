package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkConfig
 * Configuration parameters for a new network.
**/
public class NetworkConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandwidth")
    public NetworkConfigBandwidthEnum bandwidth;
    public NetworkConfig withBandwidth(NetworkConfigBandwidthEnum bandwidth) {
        this.bandwidth = bandwidth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cidr")
    public String cidr;
    public NetworkConfig withCidr(String cidr) {
        this.cidr = cidr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcpService")
    public String gcpService;
    public NetworkConfig withGcpService(String gcpService) {
        this.gcpService = gcpService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public NetworkConfig withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jumboFramesEnabled")
    public Boolean jumboFramesEnabled;
    public NetworkConfig withJumboFramesEnabled(Boolean jumboFramesEnabled) {
        this.jumboFramesEnabled = jumboFramesEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public NetworkConfig withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceCidr")
    public NetworkConfigServiceCidrEnum serviceCidr;
    public NetworkConfig withServiceCidr(NetworkConfigServiceCidrEnum serviceCidr) {
        this.serviceCidr = serviceCidr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public NetworkConfigTypeEnum type;
    public NetworkConfig withType(NetworkConfigTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userNote")
    public String userNote;
    public NetworkConfig withUserNote(String userNote) {
        this.userNote = userNote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlanAttachments")
    public IntakeVlanAttachment[] vlanAttachments;
    public NetworkConfig withVlanAttachments(IntakeVlanAttachment[] vlanAttachments) {
        this.vlanAttachments = vlanAttachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlanSameProject")
    public Boolean vlanSameProject;
    public NetworkConfig withVlanSameProject(Boolean vlanSameProject) {
        this.vlanSameProject = vlanSameProject;
        return this;
    }
}