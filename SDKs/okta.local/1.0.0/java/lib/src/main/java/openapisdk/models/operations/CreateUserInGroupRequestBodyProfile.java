package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateUserInGroupRequestBodyProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public CreateUserInGroupRequestBodyProfile withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public CreateUserInGroupRequestBodyProfile withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public CreateUserInGroupRequestBodyProfile withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("login")
    public String login;
    public CreateUserInGroupRequestBodyProfile withLogin(String login) {
        this.login = login;
        return this;
    }
}