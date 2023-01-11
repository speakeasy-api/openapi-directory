package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EmployeeEditRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employment")
    public EmployeeEditRequestEmployment employment;
    public EmployeeEditRequest withEmployment(EmployeeEditRequestEmployment employment) {
        this.employment = employment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("person")
    public EmployeeEditRequestPerson person;
    public EmployeeEditRequest withPerson(EmployeeEditRequestPerson person) {
        this.person = person;
        return this;
    }
}