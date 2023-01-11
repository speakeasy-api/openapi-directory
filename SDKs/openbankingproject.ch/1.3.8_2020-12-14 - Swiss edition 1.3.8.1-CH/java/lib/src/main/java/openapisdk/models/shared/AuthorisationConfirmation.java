package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AuthorisationConfirmation
 * Content of the body of an authorisation confirmation request
 * 
**/
public class AuthorisationConfirmation {
    @JsonProperty("confirmationCode")
    public String confirmationCode;
    public AuthorisationConfirmation withConfirmationCode(String confirmationCode) {
        this.confirmationCode = confirmationCode;
        return this;
    }
}