package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AllowedClientInput
 * Represents an 'access point' for the share.
**/
public class AllowedClientInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowDev")
    public Boolean allowDev;
    public AllowedClientInput withAllowDev(Boolean allowDev) {
        this.allowDev = allowDev;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowSuid")
    public Boolean allowSuid;
    public AllowedClientInput withAllowSuid(Boolean allowSuid) {
        this.allowSuid = allowSuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedClientsCidr")
    public String allowedClientsCidr;
    public AllowedClientInput withAllowedClientsCidr(String allowedClientsCidr) {
        this.allowedClientsCidr = allowedClientsCidr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mountPermissions")
    public AllowedClientMountPermissionsEnum mountPermissions;
    public AllowedClientInput withMountPermissions(AllowedClientMountPermissionsEnum mountPermissions) {
        this.mountPermissions = mountPermissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public AllowedClientInput withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noRootSquash")
    public Boolean noRootSquash;
    public AllowedClientInput withNoRootSquash(Boolean noRootSquash) {
        this.noRootSquash = noRootSquash;
        return this;
    }
}