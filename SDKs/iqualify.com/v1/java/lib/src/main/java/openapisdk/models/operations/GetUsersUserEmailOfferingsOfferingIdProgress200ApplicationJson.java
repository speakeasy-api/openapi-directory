package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completion")
    public String completion;
    public GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJson withCompletion(String completion) {
        this.completion = completion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJson withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJson withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJson withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
}