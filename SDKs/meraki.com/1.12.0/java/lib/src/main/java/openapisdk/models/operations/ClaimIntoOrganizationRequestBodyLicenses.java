package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ClaimIntoOrganizationRequestBodyLicenses {
    @JsonProperty("key")
    public String key;
    public ClaimIntoOrganizationRequestBodyLicenses withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public ClaimIntoOrganizationRequestBodyLicensesModeEnum mode;
    public ClaimIntoOrganizationRequestBodyLicenses withMode(ClaimIntoOrganizationRequestBodyLicensesModeEnum mode) {
        this.mode = mode;
        return this;
    }
}