package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutServersId200ApplicationJsonServer {
    @JsonProperty("backup_window")
    public String backupWindow;
    public PutServersId200ApplicationJsonServer withBackupWindow(String backupWindow) {
        this.backupWindow = backupWindow;
        return this;
    }
    @JsonProperty("created")
    public String created;
    public PutServersId200ApplicationJsonServer withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("datacenter")
    public PutServersId200ApplicationJsonServerDatacenter datacenter;
    public PutServersId200ApplicationJsonServer withDatacenter(PutServersId200ApplicationJsonServerDatacenter datacenter) {
        this.datacenter = datacenter;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PutServersId200ApplicationJsonServer withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("image")
    public PutServersId200ApplicationJsonServerImage image;
    public PutServersId200ApplicationJsonServer withImage(PutServersId200ApplicationJsonServerImage image) {
        this.image = image;
        return this;
    }
    @JsonProperty("included_traffic")
    public Double includedTraffic;
    public PutServersId200ApplicationJsonServer withIncludedTraffic(Double includedTraffic) {
        this.includedTraffic = includedTraffic;
        return this;
    }
    @JsonProperty("ingoing_traffic")
    public Double ingoingTraffic;
    public PutServersId200ApplicationJsonServer withIngoingTraffic(Double ingoingTraffic) {
        this.ingoingTraffic = ingoingTraffic;
        return this;
    }
    @JsonProperty("iso")
    public PutServersId200ApplicationJsonServerIso iso;
    public PutServersId200ApplicationJsonServer withIso(PutServersId200ApplicationJsonServerIso iso) {
        this.iso = iso;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public PutServersId200ApplicationJsonServer withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("load_balancers")
    public Long[] loadBalancers;
    public PutServersId200ApplicationJsonServer withLoadBalancers(Long[] loadBalancers) {
        this.loadBalancers = loadBalancers;
        return this;
    }
    @JsonProperty("locked")
    public Boolean locked;
    public PutServersId200ApplicationJsonServer withLocked(Boolean locked) {
        this.locked = locked;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PutServersId200ApplicationJsonServer withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("outgoing_traffic")
    public Double outgoingTraffic;
    public PutServersId200ApplicationJsonServer withOutgoingTraffic(Double outgoingTraffic) {
        this.outgoingTraffic = outgoingTraffic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placement_group")
    public PutServersId200ApplicationJsonServerPlacementGroupNullable placementGroup;
    public PutServersId200ApplicationJsonServer withPlacementGroup(PutServersId200ApplicationJsonServerPlacementGroupNullable placementGroup) {
        this.placementGroup = placementGroup;
        return this;
    }
    @JsonProperty("primary_disk_size")
    public Double primaryDiskSize;
    public PutServersId200ApplicationJsonServer withPrimaryDiskSize(Double primaryDiskSize) {
        this.primaryDiskSize = primaryDiskSize;
        return this;
    }
    @JsonProperty("private_net")
    public PutServersId200ApplicationJsonServerPrivateNet[] privateNet;
    public PutServersId200ApplicationJsonServer withPrivateNet(PutServersId200ApplicationJsonServerPrivateNet[] privateNet) {
        this.privateNet = privateNet;
        return this;
    }
    @JsonProperty("protection")
    public PutServersId200ApplicationJsonServerProtection protection;
    public PutServersId200ApplicationJsonServer withProtection(PutServersId200ApplicationJsonServerProtection protection) {
        this.protection = protection;
        return this;
    }
    @JsonProperty("public_net")
    public PutServersId200ApplicationJsonServerPublicNet publicNet;
    public PutServersId200ApplicationJsonServer withPublicNet(PutServersId200ApplicationJsonServerPublicNet publicNet) {
        this.publicNet = publicNet;
        return this;
    }
    @JsonProperty("rescue_enabled")
    public Boolean rescueEnabled;
    public PutServersId200ApplicationJsonServer withRescueEnabled(Boolean rescueEnabled) {
        this.rescueEnabled = rescueEnabled;
        return this;
    }
    @JsonProperty("server_type")
    public PutServersId200ApplicationJsonServerServerType serverType;
    public PutServersId200ApplicationJsonServer withServerType(PutServersId200ApplicationJsonServerServerType serverType) {
        this.serverType = serverType;
        return this;
    }
    @JsonProperty("status")
    public PutServersId200ApplicationJsonServerStatusEnum status;
    public PutServersId200ApplicationJsonServer withStatus(PutServersId200ApplicationJsonServerStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumes")
    public Long[] volumes;
    public PutServersId200ApplicationJsonServer withVolumes(Long[] volumes) {
        this.volumes = volumes;
        return this;
    }
}