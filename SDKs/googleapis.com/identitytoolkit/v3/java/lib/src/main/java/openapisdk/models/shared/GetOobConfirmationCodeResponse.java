package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetOobConfirmationCodeResponse
 * Response of getting a code for user confirmation (reset password, change email etc.).
**/
public class GetOobConfirmationCodeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public GetOobConfirmationCodeResponse withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public GetOobConfirmationCodeResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oobCode")
    public String oobCode;
    public GetOobConfirmationCodeResponse withOobCode(String oobCode) {
        this.oobCode = oobCode;
        return this;
    }
}