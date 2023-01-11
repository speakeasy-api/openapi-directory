package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VmParams
 * Parameters for creating a Compute Engine Instance resource. Most fields are identical to the corresponding Compute Engine resource.
**/
public class VmParams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseInstanceName")
    public String baseInstanceName;
    public VmParams withBaseInstanceName(String baseInstanceName) {
        this.baseInstanceName = baseInstanceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canIpForward")
    public Boolean canIpForward;
    public VmParams withCanIpForward(Boolean canIpForward) {
        this.canIpForward = canIpForward;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public VmParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disksToAttach")
    public ExistingDisk[] disksToAttach;
    public VmParams withDisksToAttach(ExistingDisk[] disksToAttach) {
        this.disksToAttach = disksToAttach;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disksToCreate")
    public NewDisk[] disksToCreate;
    public VmParams withDisksToCreate(NewDisk[] disksToCreate) {
        this.disksToCreate = disksToCreate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineType")
    public String machineType;
    public VmParams withMachineType(String machineType) {
        this.machineType = machineType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public Metadata metadata;
    public VmParams withMetadata(Metadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkInterfaces")
    public NetworkInterface[] networkInterfaces;
    public VmParams withNetworkInterfaces(NetworkInterface[] networkInterfaces) {
        this.networkInterfaces = networkInterfaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onHostMaintenance")
    public String onHostMaintenance;
    public VmParams withOnHostMaintenance(String onHostMaintenance) {
        this.onHostMaintenance = onHostMaintenance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccounts")
    public ServiceAccount[] serviceAccounts;
    public VmParams withServiceAccounts(ServiceAccount[] serviceAccounts) {
        this.serviceAccounts = serviceAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag tags;
    public VmParams withTags(Tag tags) {
        this.tags = tags;
        return this;
    }
}