package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetServers200ApplicationJsonServers {
    @JsonProperty("backup_window")
    public String backupWindow;
    public GetServers200ApplicationJsonServers withBackupWindow(String backupWindow) {
        this.backupWindow = backupWindow;
        return this;
    }
    @JsonProperty("created")
    public String created;
    public GetServers200ApplicationJsonServers withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("datacenter")
    public GetServers200ApplicationJsonServersDatacenter datacenter;
    public GetServers200ApplicationJsonServers withDatacenter(GetServers200ApplicationJsonServersDatacenter datacenter) {
        this.datacenter = datacenter;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetServers200ApplicationJsonServers withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("image")
    public GetServers200ApplicationJsonServersImage image;
    public GetServers200ApplicationJsonServers withImage(GetServers200ApplicationJsonServersImage image) {
        this.image = image;
        return this;
    }
    @JsonProperty("included_traffic")
    public Double includedTraffic;
    public GetServers200ApplicationJsonServers withIncludedTraffic(Double includedTraffic) {
        this.includedTraffic = includedTraffic;
        return this;
    }
    @JsonProperty("ingoing_traffic")
    public Double ingoingTraffic;
    public GetServers200ApplicationJsonServers withIngoingTraffic(Double ingoingTraffic) {
        this.ingoingTraffic = ingoingTraffic;
        return this;
    }
    @JsonProperty("iso")
    public GetServers200ApplicationJsonServersIso iso;
    public GetServers200ApplicationJsonServers withIso(GetServers200ApplicationJsonServersIso iso) {
        this.iso = iso;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GetServers200ApplicationJsonServers withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("load_balancers")
    public Long[] loadBalancers;
    public GetServers200ApplicationJsonServers withLoadBalancers(Long[] loadBalancers) {
        this.loadBalancers = loadBalancers;
        return this;
    }
    @JsonProperty("locked")
    public Boolean locked;
    public GetServers200ApplicationJsonServers withLocked(Boolean locked) {
        this.locked = locked;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetServers200ApplicationJsonServers withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("outgoing_traffic")
    public Double outgoingTraffic;
    public GetServers200ApplicationJsonServers withOutgoingTraffic(Double outgoingTraffic) {
        this.outgoingTraffic = outgoingTraffic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placement_group")
    public GetServers200ApplicationJsonServersPlacementGroupNullable placementGroup;
    public GetServers200ApplicationJsonServers withPlacementGroup(GetServers200ApplicationJsonServersPlacementGroupNullable placementGroup) {
        this.placementGroup = placementGroup;
        return this;
    }
    @JsonProperty("primary_disk_size")
    public Double primaryDiskSize;
    public GetServers200ApplicationJsonServers withPrimaryDiskSize(Double primaryDiskSize) {
        this.primaryDiskSize = primaryDiskSize;
        return this;
    }
    @JsonProperty("private_net")
    public GetServers200ApplicationJsonServersPrivateNet[] privateNet;
    public GetServers200ApplicationJsonServers withPrivateNet(GetServers200ApplicationJsonServersPrivateNet[] privateNet) {
        this.privateNet = privateNet;
        return this;
    }
    @JsonProperty("protection")
    public GetServers200ApplicationJsonServersProtection protection;
    public GetServers200ApplicationJsonServers withProtection(GetServers200ApplicationJsonServersProtection protection) {
        this.protection = protection;
        return this;
    }
    @JsonProperty("public_net")
    public GetServers200ApplicationJsonServersPublicNet publicNet;
    public GetServers200ApplicationJsonServers withPublicNet(GetServers200ApplicationJsonServersPublicNet publicNet) {
        this.publicNet = publicNet;
        return this;
    }
    @JsonProperty("rescue_enabled")
    public Boolean rescueEnabled;
    public GetServers200ApplicationJsonServers withRescueEnabled(Boolean rescueEnabled) {
        this.rescueEnabled = rescueEnabled;
        return this;
    }
    @JsonProperty("server_type")
    public GetServers200ApplicationJsonServersServerType serverType;
    public GetServers200ApplicationJsonServers withServerType(GetServers200ApplicationJsonServersServerType serverType) {
        this.serverType = serverType;
        return this;
    }
    @JsonProperty("status")
    public GetServers200ApplicationJsonServersStatusEnum status;
    public GetServers200ApplicationJsonServers withStatus(GetServers200ApplicationJsonServersStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumes")
    public Long[] volumes;
    public GetServers200ApplicationJsonServers withVolumes(Long[] volumes) {
        this.volumes = volumes;
        return this;
    }
}