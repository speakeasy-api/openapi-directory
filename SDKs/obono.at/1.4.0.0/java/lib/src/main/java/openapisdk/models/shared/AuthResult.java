package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AuthResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessToken")
    public String accessToken;
    public AuthResult withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrierkasseUuid")
    public String registrierkasseUuid;
    public AuthResult withRegistrierkasseUuid(String registrierkasseUuid) {
        this.registrierkasseUuid = registrierkasseUuid;
        return this;
    }
}