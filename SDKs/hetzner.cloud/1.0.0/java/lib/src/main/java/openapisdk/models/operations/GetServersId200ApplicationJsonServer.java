package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetServersId200ApplicationJsonServer {
    @JsonProperty("backup_window")
    public String backupWindow;
    public GetServersId200ApplicationJsonServer withBackupWindow(String backupWindow) {
        this.backupWindow = backupWindow;
        return this;
    }
    @JsonProperty("created")
    public String created;
    public GetServersId200ApplicationJsonServer withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("datacenter")
    public GetServersId200ApplicationJsonServerDatacenter datacenter;
    public GetServersId200ApplicationJsonServer withDatacenter(GetServersId200ApplicationJsonServerDatacenter datacenter) {
        this.datacenter = datacenter;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetServersId200ApplicationJsonServer withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("image")
    public GetServersId200ApplicationJsonServerImage image;
    public GetServersId200ApplicationJsonServer withImage(GetServersId200ApplicationJsonServerImage image) {
        this.image = image;
        return this;
    }
    @JsonProperty("included_traffic")
    public Double includedTraffic;
    public GetServersId200ApplicationJsonServer withIncludedTraffic(Double includedTraffic) {
        this.includedTraffic = includedTraffic;
        return this;
    }
    @JsonProperty("ingoing_traffic")
    public Double ingoingTraffic;
    public GetServersId200ApplicationJsonServer withIngoingTraffic(Double ingoingTraffic) {
        this.ingoingTraffic = ingoingTraffic;
        return this;
    }
    @JsonProperty("iso")
    public GetServersId200ApplicationJsonServerIso iso;
    public GetServersId200ApplicationJsonServer withIso(GetServersId200ApplicationJsonServerIso iso) {
        this.iso = iso;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GetServersId200ApplicationJsonServer withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("load_balancers")
    public Long[] loadBalancers;
    public GetServersId200ApplicationJsonServer withLoadBalancers(Long[] loadBalancers) {
        this.loadBalancers = loadBalancers;
        return this;
    }
    @JsonProperty("locked")
    public Boolean locked;
    public GetServersId200ApplicationJsonServer withLocked(Boolean locked) {
        this.locked = locked;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetServersId200ApplicationJsonServer withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("outgoing_traffic")
    public Double outgoingTraffic;
    public GetServersId200ApplicationJsonServer withOutgoingTraffic(Double outgoingTraffic) {
        this.outgoingTraffic = outgoingTraffic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placement_group")
    public GetServersId200ApplicationJsonServerPlacementGroupNullable placementGroup;
    public GetServersId200ApplicationJsonServer withPlacementGroup(GetServersId200ApplicationJsonServerPlacementGroupNullable placementGroup) {
        this.placementGroup = placementGroup;
        return this;
    }
    @JsonProperty("primary_disk_size")
    public Double primaryDiskSize;
    public GetServersId200ApplicationJsonServer withPrimaryDiskSize(Double primaryDiskSize) {
        this.primaryDiskSize = primaryDiskSize;
        return this;
    }
    @JsonProperty("private_net")
    public GetServersId200ApplicationJsonServerPrivateNet[] privateNet;
    public GetServersId200ApplicationJsonServer withPrivateNet(GetServersId200ApplicationJsonServerPrivateNet[] privateNet) {
        this.privateNet = privateNet;
        return this;
    }
    @JsonProperty("protection")
    public GetServersId200ApplicationJsonServerProtection protection;
    public GetServersId200ApplicationJsonServer withProtection(GetServersId200ApplicationJsonServerProtection protection) {
        this.protection = protection;
        return this;
    }
    @JsonProperty("public_net")
    public GetServersId200ApplicationJsonServerPublicNet publicNet;
    public GetServersId200ApplicationJsonServer withPublicNet(GetServersId200ApplicationJsonServerPublicNet publicNet) {
        this.publicNet = publicNet;
        return this;
    }
    @JsonProperty("rescue_enabled")
    public Boolean rescueEnabled;
    public GetServersId200ApplicationJsonServer withRescueEnabled(Boolean rescueEnabled) {
        this.rescueEnabled = rescueEnabled;
        return this;
    }
    @JsonProperty("server_type")
    public GetServersId200ApplicationJsonServerServerType serverType;
    public GetServersId200ApplicationJsonServer withServerType(GetServersId200ApplicationJsonServerServerType serverType) {
        this.serverType = serverType;
        return this;
    }
    @JsonProperty("status")
    public GetServersId200ApplicationJsonServerStatusEnum status;
    public GetServersId200ApplicationJsonServer withStatus(GetServersId200ApplicationJsonServerStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumes")
    public Long[] volumes;
    public GetServersId200ApplicationJsonServer withVolumes(Long[] volumes) {
        this.volumes = volumes;
        return this;
    }
}