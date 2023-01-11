package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProvisioningConfig
 * A provisioning configuration.
**/
public class ProvisioningConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudConsoleUri")
    public String cloudConsoleUri;
    public ProvisioningConfig withCloudConsoleUri(String cloudConsoleUri) {
        this.cloudConsoleUri = cloudConsoleUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customId")
    public String customId;
    public ProvisioningConfig withCustomId(String customId) {
        this.customId = customId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ProvisioningConfig withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("handoverServiceAccount")
    public String handoverServiceAccount;
    public ProvisioningConfig withHandoverServiceAccount(String handoverServiceAccount) {
        this.handoverServiceAccount = handoverServiceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instances")
    public InstanceConfig[] instances;
    public ProvisioningConfig withInstances(InstanceConfig[] instances) {
        this.instances = instances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public ProvisioningConfig withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ProvisioningConfig withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networks")
    public NetworkConfig[] networks;
    public ProvisioningConfig withNetworks(NetworkConfig[] networks) {
        this.networks = networks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ProvisioningConfigStateEnum state;
    public ProvisioningConfig withState(ProvisioningConfigStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusMessage")
    public String statusMessage;
    public ProvisioningConfig withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ticketId")
    public String ticketId;
    public ProvisioningConfig withTicketId(String ticketId) {
        this.ticketId = ticketId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public ProvisioningConfig withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumes")
    public VolumeConfig[] volumes;
    public ProvisioningConfig withVolumes(VolumeConfig[] volumes) {
        this.volumes = volumes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcScEnabled")
    public Boolean vpcScEnabled;
    public ProvisioningConfig withVpcScEnabled(Boolean vpcScEnabled) {
        this.vpcScEnabled = vpcScEnabled;
        return this;
    }
}