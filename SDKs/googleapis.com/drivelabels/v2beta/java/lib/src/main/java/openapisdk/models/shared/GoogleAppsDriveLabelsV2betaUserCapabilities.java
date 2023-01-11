package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaUserCapabilities
 * The capabilities of a user.
**/
public class GoogleAppsDriveLabelsV2betaUserCapabilities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canAccessLabelManager")
    public Boolean canAccessLabelManager;
    public GoogleAppsDriveLabelsV2betaUserCapabilities withCanAccessLabelManager(Boolean canAccessLabelManager) {
        this.canAccessLabelManager = canAccessLabelManager;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canAdministrateLabels")
    public Boolean canAdministrateLabels;
    public GoogleAppsDriveLabelsV2betaUserCapabilities withCanAdministrateLabels(Boolean canAdministrateLabels) {
        this.canAdministrateLabels = canAdministrateLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canCreateAdminLabels")
    public Boolean canCreateAdminLabels;
    public GoogleAppsDriveLabelsV2betaUserCapabilities withCanCreateAdminLabels(Boolean canCreateAdminLabels) {
        this.canCreateAdminLabels = canCreateAdminLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canCreateSharedLabels")
    public Boolean canCreateSharedLabels;
    public GoogleAppsDriveLabelsV2betaUserCapabilities withCanCreateSharedLabels(Boolean canCreateSharedLabels) {
        this.canCreateSharedLabels = canCreateSharedLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleAppsDriveLabelsV2betaUserCapabilities withName(String name) {
        this.name = name;
        return this;
    }
}