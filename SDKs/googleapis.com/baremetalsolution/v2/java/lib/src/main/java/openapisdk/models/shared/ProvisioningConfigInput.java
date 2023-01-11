package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProvisioningConfigInput
 * A provisioning configuration.
**/
public class ProvisioningConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customId")
    public String customId;
    public ProvisioningConfigInput withCustomId(String customId) {
        this.customId = customId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ProvisioningConfigInput withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("handoverServiceAccount")
    public String handoverServiceAccount;
    public ProvisioningConfigInput withHandoverServiceAccount(String handoverServiceAccount) {
        this.handoverServiceAccount = handoverServiceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instances")
    public InstanceConfigInput[] instances;
    public ProvisioningConfigInput withInstances(InstanceConfigInput[] instances) {
        this.instances = instances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public ProvisioningConfigInput withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networks")
    public NetworkConfigInput[] networks;
    public ProvisioningConfigInput withNetworks(NetworkConfigInput[] networks) {
        this.networks = networks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusMessage")
    public String statusMessage;
    public ProvisioningConfigInput withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ticketId")
    public String ticketId;
    public ProvisioningConfigInput withTicketId(String ticketId) {
        this.ticketId = ticketId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumes")
    public VolumeConfigInput[] volumes;
    public ProvisioningConfigInput withVolumes(VolumeConfigInput[] volumes) {
        this.volumes = volumes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcScEnabled")
    public Boolean vpcScEnabled;
    public ProvisioningConfigInput withVpcScEnabled(Boolean vpcScEnabled) {
        this.vpcScEnabled = vpcScEnabled;
        return this;
    }
}