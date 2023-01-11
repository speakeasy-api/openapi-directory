package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentificationTokenGenerationRequest
 * Information used to generate a token
**/
public class IdentificationTokenGenerationRequest {
    @JsonProperty("email")
    public String email;
    public IdentificationTokenGenerationRequest withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public IdentificationTokenGenerationRequest withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public IdentificationTokenGenerationRequest withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
}