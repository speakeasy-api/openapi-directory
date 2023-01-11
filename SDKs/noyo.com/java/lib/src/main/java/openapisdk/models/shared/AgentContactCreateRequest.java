package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AgentContactCreateRequest {
    @JsonProperty("email")
    public String email;
    public AgentContactCreateRequest withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("first_name")
    public String firstName;
    public AgentContactCreateRequest withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonProperty("last_name")
    public String lastName;
    public AgentContactCreateRequest withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public AgentContactCreateRequest withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public AgentContactCreateRequest withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("types")
    public AgentContactCreateRequestTypesEnum[] types;
    public AgentContactCreateRequest withTypes(AgentContactCreateRequestTypesEnum[] types) {
        this.types = types;
        return this;
    }
}