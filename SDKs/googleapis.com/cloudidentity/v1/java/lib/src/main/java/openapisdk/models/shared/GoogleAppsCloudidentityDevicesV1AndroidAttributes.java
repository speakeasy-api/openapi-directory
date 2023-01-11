package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsCloudidentityDevicesV1AndroidAttributes
 * Resource representing the Android specific attributes of a Device.
**/
public class GoogleAppsCloudidentityDevicesV1AndroidAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabledUnknownSources")
    public Boolean enabledUnknownSources;
    public GoogleAppsCloudidentityDevicesV1AndroidAttributes withEnabledUnknownSources(Boolean enabledUnknownSources) {
        this.enabledUnknownSources = enabledUnknownSources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerProfileAccount")
    public Boolean ownerProfileAccount;
    public GoogleAppsCloudidentityDevicesV1AndroidAttributes withOwnerProfileAccount(Boolean ownerProfileAccount) {
        this.ownerProfileAccount = ownerProfileAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownershipPrivilege")
    public GoogleAppsCloudidentityDevicesV1AndroidAttributesOwnershipPrivilegeEnum ownershipPrivilege;
    public GoogleAppsCloudidentityDevicesV1AndroidAttributes withOwnershipPrivilege(GoogleAppsCloudidentityDevicesV1AndroidAttributesOwnershipPrivilegeEnum ownershipPrivilege) {
        this.ownershipPrivilege = ownershipPrivilege;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportsWorkProfile")
    public Boolean supportsWorkProfile;
    public GoogleAppsCloudidentityDevicesV1AndroidAttributes withSupportsWorkProfile(Boolean supportsWorkProfile) {
        this.supportsWorkProfile = supportsWorkProfile;
        return this;
    }
}