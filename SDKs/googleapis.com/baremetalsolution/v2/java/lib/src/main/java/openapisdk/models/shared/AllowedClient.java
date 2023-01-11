package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AllowedClient
 * Represents an 'access point' for the share.
**/
public class AllowedClient {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowDev")
    public Boolean allowDev;
    public AllowedClient withAllowDev(Boolean allowDev) {
        this.allowDev = allowDev;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowSuid")
    public Boolean allowSuid;
    public AllowedClient withAllowSuid(Boolean allowSuid) {
        this.allowSuid = allowSuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedClientsCidr")
    public String allowedClientsCidr;
    public AllowedClient withAllowedClientsCidr(String allowedClientsCidr) {
        this.allowedClientsCidr = allowedClientsCidr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mountPermissions")
    public AllowedClientMountPermissionsEnum mountPermissions;
    public AllowedClient withMountPermissions(AllowedClientMountPermissionsEnum mountPermissions) {
        this.mountPermissions = mountPermissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public AllowedClient withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nfsPath")
    public String nfsPath;
    public AllowedClient withNfsPath(String nfsPath) {
        this.nfsPath = nfsPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noRootSquash")
    public Boolean noRootSquash;
    public AllowedClient withNoRootSquash(Boolean noRootSquash) {
        this.noRootSquash = noRootSquash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shareIp")
    public String shareIp;
    public AllowedClient withShareIp(String shareIp) {
        this.shareIp = shareIp;
        return this;
    }
}