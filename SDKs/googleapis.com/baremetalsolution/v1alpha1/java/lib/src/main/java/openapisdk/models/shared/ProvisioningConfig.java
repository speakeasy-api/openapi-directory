package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProvisioningConfig
 * An provisioning configuration.
**/
public class ProvisioningConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instances")
    public InstanceConfig[] instances;
    public ProvisioningConfig withInstances(InstanceConfig[] instances) {
        this.instances = instances;
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
    @JsonProperty("ticketId")
    public String ticketId;
    public ProvisioningConfig withTicketId(String ticketId) {
        this.ticketId = ticketId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumes")
    public VolumeConfig[] volumes;
    public ProvisioningConfig withVolumes(VolumeConfig[] volumes) {
        this.volumes = volumes;
        return this;
    }
}