package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PatientAuthConfirmRequestCredential
 * note, demographic details are only required for demographic auth at this point.
**/
public class PatientAuthConfirmRequestCredential {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authCode")
    public String authCode;
    public PatientAuthConfirmRequestCredential withAuthCode(String authCode) {
        this.authCode = authCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("demographic")
    public PatientDemographic demographic;
    public PatientAuthConfirmRequestCredential withDemographic(PatientDemographic demographic) {
        this.demographic = demographic;
        return this;
    }
}