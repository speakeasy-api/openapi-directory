package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AndroidAttributes
 * Resource representing the Android specific attributes of a Device.
**/
public class AndroidAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabledUnknownSources")
    public Boolean enabledUnknownSources;
    public AndroidAttributes withEnabledUnknownSources(Boolean enabledUnknownSources) {
        this.enabledUnknownSources = enabledUnknownSources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerProfileAccount")
    public Boolean ownerProfileAccount;
    public AndroidAttributes withOwnerProfileAccount(Boolean ownerProfileAccount) {
        this.ownerProfileAccount = ownerProfileAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownershipPrivilege")
    public AndroidAttributesOwnershipPrivilegeEnum ownershipPrivilege;
    public AndroidAttributes withOwnershipPrivilege(AndroidAttributesOwnershipPrivilegeEnum ownershipPrivilege) {
        this.ownershipPrivilege = ownershipPrivilege;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportsWorkProfile")
    public Boolean supportsWorkProfile;
    public AndroidAttributes withSupportsWorkProfile(Boolean supportsWorkProfile) {
        this.supportsWorkProfile = supportsWorkProfile;
        return this;
    }
}