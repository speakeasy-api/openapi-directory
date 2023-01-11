package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NfsExport
 * A NFS export entry.
**/
public class NfsExport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowDev")
    public Boolean allowDev;
    public NfsExport withAllowDev(Boolean allowDev) {
        this.allowDev = allowDev;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowSuid")
    public Boolean allowSuid;
    public NfsExport withAllowSuid(Boolean allowSuid) {
        this.allowSuid = allowSuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cidr")
    public String cidr;
    public NfsExport withCidr(String cidr) {
        this.cidr = cidr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineId")
    public String machineId;
    public NfsExport withMachineId(String machineId) {
        this.machineId = machineId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkId")
    public String networkId;
    public NfsExport withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noRootSquash")
    public Boolean noRootSquash;
    public NfsExport withNoRootSquash(Boolean noRootSquash) {
        this.noRootSquash = noRootSquash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public NfsExportPermissionsEnum permissions;
    public NfsExport withPermissions(NfsExportPermissionsEnum permissions) {
        this.permissions = permissions;
        return this;
    }
}