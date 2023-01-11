package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Grant
 * An access grant resource.
**/
public class Grant {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appLevelPermissions")
    public GrantAppLevelPermissionsEnum[] appLevelPermissions;
    public Grant withAppLevelPermissions(GrantAppLevelPermissionsEnum[] appLevelPermissions) {
        this.appLevelPermissions = appLevelPermissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Grant withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageName")
    public String packageName;
    public Grant withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}