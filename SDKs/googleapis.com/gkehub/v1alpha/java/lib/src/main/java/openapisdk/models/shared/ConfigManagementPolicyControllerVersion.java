package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigManagementPolicyControllerVersion
 * The build version of Gatekeeper Policy Controller is using.
**/
public class ConfigManagementPolicyControllerVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public ConfigManagementPolicyControllerVersion withVersion(String version) {
        this.version = version;
        return this;
    }
}