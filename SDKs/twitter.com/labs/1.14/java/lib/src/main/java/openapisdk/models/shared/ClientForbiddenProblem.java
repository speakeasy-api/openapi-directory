package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClientForbiddenProblem
 * A problem that indicates your client is forbidden from making this request.
**/
public class ClientForbiddenProblem {
    @JsonProperty("detail")
    public String detail;
    public ClientForbiddenProblem withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public ClientForbiddenProblemReasonEnum reason;
    public ClientForbiddenProblem withReason(ClientForbiddenProblemReasonEnum reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registration_url")
    public String registrationUrl;
    public ClientForbiddenProblem withRegistrationUrl(String registrationUrl) {
        this.registrationUrl = registrationUrl;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ClientForbiddenProblem withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ClientForbiddenProblem withType(String type) {
        this.type = type;
        return this;
    }
}