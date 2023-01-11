package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkConfigInput
 * Configuration parameters for a new network.
**/
public class NetworkConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandwidth")
    public NetworkConfigBandwidthEnum bandwidth;
    public NetworkConfigInput withBandwidth(NetworkConfigBandwidthEnum bandwidth) {
        this.bandwidth = bandwidth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cidr")
    public String cidr;
    public NetworkConfigInput withCidr(String cidr) {
        this.cidr = cidr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcpService")
    public String gcpService;
    public NetworkConfigInput withGcpService(String gcpService) {
        this.gcpService = gcpService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public NetworkConfigInput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jumboFramesEnabled")
    public Boolean jumboFramesEnabled;
    public NetworkConfigInput withJumboFramesEnabled(Boolean jumboFramesEnabled) {
        this.jumboFramesEnabled = jumboFramesEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceCidr")
    public NetworkConfigServiceCidrEnum serviceCidr;
    public NetworkConfigInput withServiceCidr(NetworkConfigServiceCidrEnum serviceCidr) {
        this.serviceCidr = serviceCidr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public NetworkConfigTypeEnum type;
    public NetworkConfigInput withType(NetworkConfigTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userNote")
    public String userNote;
    public NetworkConfigInput withUserNote(String userNote) {
        this.userNote = userNote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlanAttachments")
    public IntakeVlanAttachment[] vlanAttachments;
    public NetworkConfigInput withVlanAttachments(IntakeVlanAttachment[] vlanAttachments) {
        this.vlanAttachments = vlanAttachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlanSameProject")
    public Boolean vlanSameProject;
    public NetworkConfigInput withVlanSameProject(Boolean vlanSameProject) {
        this.vlanSameProject = vlanSameProject;
        return this;
    }
}