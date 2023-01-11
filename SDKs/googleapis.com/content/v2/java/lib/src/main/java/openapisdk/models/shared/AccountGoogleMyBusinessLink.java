package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountGoogleMyBusinessLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gmbEmail")
    public String gmbEmail;
    public AccountGoogleMyBusinessLink withGmbEmail(String gmbEmail) {
        this.gmbEmail = gmbEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public AccountGoogleMyBusinessLink withStatus(String status) {
        this.status = status;
        return this;
    }
}