package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNetworkMerakiAuthUserRequestBodyAuthorizations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiresAt")
    public String expiresAt;
    public CreateNetworkMerakiAuthUserRequestBodyAuthorizations withExpiresAt(String expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssidNumber")
    public Long ssidNumber;
    public CreateNetworkMerakiAuthUserRequestBodyAuthorizations withSsidNumber(Long ssidNumber) {
        this.ssidNumber = ssidNumber;
        return this;
    }
}