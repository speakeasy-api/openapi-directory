package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DecodeIntegrityTokenResponse
 * Response containing the decoded integrity payload.
**/
public class DecodeIntegrityTokenResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenPayloadExternal")
    public TokenPayloadExternal tokenPayloadExternal;
    public DecodeIntegrityTokenResponse withTokenPayloadExternal(TokenPayloadExternal tokenPayloadExternal) {
        this.tokenPayloadExternal = tokenPayloadExternal;
        return this;
    }
}