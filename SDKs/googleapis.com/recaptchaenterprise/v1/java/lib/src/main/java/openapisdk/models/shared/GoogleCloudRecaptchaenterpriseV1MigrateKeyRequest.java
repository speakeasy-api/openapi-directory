package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest
 * The migrate key request message.
**/
public class GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skipBillingCheck")
    public Boolean skipBillingCheck;
    public GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest withSkipBillingCheck(Boolean skipBillingCheck) {
        this.skipBillingCheck = skipBillingCheck;
        return this;
    }
}