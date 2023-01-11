package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PayoutNameV3 {
    @JsonProperty("firstName")
    public String firstName;
    public PayoutNameV3 withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonProperty("lastName")
    public String lastName;
    public PayoutNameV3 withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
}