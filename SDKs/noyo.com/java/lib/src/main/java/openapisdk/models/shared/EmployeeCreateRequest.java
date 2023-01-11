package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EmployeeCreateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employment")
    public EmployeeCreateRequestEmployment employment;
    public EmployeeCreateRequest withEmployment(EmployeeCreateRequestEmployment employment) {
        this.employment = employment;
        return this;
    }
    @JsonProperty("person")
    public EmployeeCreateRequestPerson person;
    public EmployeeCreateRequest withPerson(EmployeeCreateRequestPerson person) {
        this.person = person;
        return this;
    }
}