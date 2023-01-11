package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkMerakiAuthUserRequestBodyAuthorizations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiresAt")
    public String expiresAt;
    public UpdateNetworkMerakiAuthUserRequestBodyAuthorizations withExpiresAt(String expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    }
    @JsonProperty("ssidNumber")
    public Long ssidNumber;
    public UpdateNetworkMerakiAuthUserRequestBodyAuthorizations withSsidNumber(Long ssidNumber) {
        this.ssidNumber = ssidNumber;
        return this;
    }
}