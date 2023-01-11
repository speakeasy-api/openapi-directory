package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitAdminV2Inheritance
 * Settings that the tenants will inherit from project level.
**/
public class GoogleCloudIdentitytoolkitAdminV2Inheritance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailSendingConfig")
    public Boolean emailSendingConfig;
    public GoogleCloudIdentitytoolkitAdminV2Inheritance withEmailSendingConfig(Boolean emailSendingConfig) {
        this.emailSendingConfig = emailSendingConfig;
        return this;
    }
}