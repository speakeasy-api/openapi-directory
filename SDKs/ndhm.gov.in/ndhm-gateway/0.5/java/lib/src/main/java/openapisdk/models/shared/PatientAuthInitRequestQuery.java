package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatientAuthInitRequestQuery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authMode")
    public AuthenticationModeEnum authMode;
    public PatientAuthInitRequestQuery withAuthMode(AuthenticationModeEnum authMode) {
        this.authMode = authMode;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public PatientAuthInitRequestQuery withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("purpose")
    public PatientAuthPurposeEnum purpose;
    public PatientAuthInitRequestQuery withPurpose(PatientAuthPurposeEnum purpose) {
        this.purpose = purpose;
        return this;
    }
    @JsonProperty("requester")
    public PatientAuthRequester requester;
    public PatientAuthInitRequestQuery withRequester(PatientAuthRequester requester) {
        this.requester = requester;
        return this;
    }
}