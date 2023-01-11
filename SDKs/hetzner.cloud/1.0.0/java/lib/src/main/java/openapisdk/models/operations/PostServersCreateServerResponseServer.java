package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostServersCreateServerResponseServer {
    @JsonProperty("backup_window")
    public String backupWindow;
    public PostServersCreateServerResponseServer withBackupWindow(String backupWindow) {
        this.backupWindow = backupWindow;
        return this;
    }
    @JsonProperty("created")
    public String created;
    public PostServersCreateServerResponseServer withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("datacenter")
    public PostServersCreateServerResponseServerDatacenter datacenter;
    public PostServersCreateServerResponseServer withDatacenter(PostServersCreateServerResponseServerDatacenter datacenter) {
        this.datacenter = datacenter;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostServersCreateServerResponseServer withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("image")
    public PostServersCreateServerResponseServerImage image;
    public PostServersCreateServerResponseServer withImage(PostServersCreateServerResponseServerImage image) {
        this.image = image;
        return this;
    }
    @JsonProperty("included_traffic")
    public Double includedTraffic;
    public PostServersCreateServerResponseServer withIncludedTraffic(Double includedTraffic) {
        this.includedTraffic = includedTraffic;
        return this;
    }
    @JsonProperty("ingoing_traffic")
    public Double ingoingTraffic;
    public PostServersCreateServerResponseServer withIngoingTraffic(Double ingoingTraffic) {
        this.ingoingTraffic = ingoingTraffic;
        return this;
    }
    @JsonProperty("iso")
    public PostServersCreateServerResponseServerIso iso;
    public PostServersCreateServerResponseServer withIso(PostServersCreateServerResponseServerIso iso) {
        this.iso = iso;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public PostServersCreateServerResponseServer withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("load_balancers")
    public Long[] loadBalancers;
    public PostServersCreateServerResponseServer withLoadBalancers(Long[] loadBalancers) {
        this.loadBalancers = loadBalancers;
        return this;
    }
    @JsonProperty("locked")
    public Boolean locked;
    public PostServersCreateServerResponseServer withLocked(Boolean locked) {
        this.locked = locked;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostServersCreateServerResponseServer withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("outgoing_traffic")
    public Double outgoingTraffic;
    public PostServersCreateServerResponseServer withOutgoingTraffic(Double outgoingTraffic) {
        this.outgoingTraffic = outgoingTraffic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placement_group")
    public PostServersCreateServerResponseServerPlacementGroupNullable placementGroup;
    public PostServersCreateServerResponseServer withPlacementGroup(PostServersCreateServerResponseServerPlacementGroupNullable placementGroup) {
        this.placementGroup = placementGroup;
        return this;
    }
    @JsonProperty("primary_disk_size")
    public Double primaryDiskSize;
    public PostServersCreateServerResponseServer withPrimaryDiskSize(Double primaryDiskSize) {
        this.primaryDiskSize = primaryDiskSize;
        return this;
    }
    @JsonProperty("private_net")
    public PostServersCreateServerResponseServerPrivateNet[] privateNet;
    public PostServersCreateServerResponseServer withPrivateNet(PostServersCreateServerResponseServerPrivateNet[] privateNet) {
        this.privateNet = privateNet;
        return this;
    }
    @JsonProperty("protection")
    public PostServersCreateServerResponseServerProtection protection;
    public PostServersCreateServerResponseServer withProtection(PostServersCreateServerResponseServerProtection protection) {
        this.protection = protection;
        return this;
    }
    @JsonProperty("public_net")
    public PostServersCreateServerResponseServerPublicNet publicNet;
    public PostServersCreateServerResponseServer withPublicNet(PostServersCreateServerResponseServerPublicNet publicNet) {
        this.publicNet = publicNet;
        return this;
    }
    @JsonProperty("rescue_enabled")
    public Boolean rescueEnabled;
    public PostServersCreateServerResponseServer withRescueEnabled(Boolean rescueEnabled) {
        this.rescueEnabled = rescueEnabled;
        return this;
    }
    @JsonProperty("server_type")
    public PostServersCreateServerResponseServerServerType serverType;
    public PostServersCreateServerResponseServer withServerType(PostServersCreateServerResponseServerServerType serverType) {
        this.serverType = serverType;
        return this;
    }
    @JsonProperty("status")
    public PostServersCreateServerResponseServerStatusEnum status;
    public PostServersCreateServerResponseServer withStatus(PostServersCreateServerResponseServerStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumes")
    public Long[] volumes;
    public PostServersCreateServerResponseServer withVolumes(Long[] volumes) {
        this.volumes = volumes;
        return this;
    }
}