package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigManagementInstallError
 * Errors pertaining to the installation of ACM
**/
public class ConfigManagementInstallError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public ConfigManagementInstallError withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
}