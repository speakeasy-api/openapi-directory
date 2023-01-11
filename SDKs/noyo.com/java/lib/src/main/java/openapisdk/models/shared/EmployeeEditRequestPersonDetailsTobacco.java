package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeEditRequestPersonDetailsTobacco
 * Tobacco usage details (if applicable)
**/
public class EmployeeEditRequestPersonDetailsTobacco {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public EmployeeEditRequestPersonDetailsTobacco withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequency")
    public String frequency;
    public EmployeeEditRequestPersonDetailsTobacco withFrequency(String frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("types")
    public EmployeeEditRequestPersonDetailsTobaccoTypesEnum[] types;
    public EmployeeEditRequestPersonDetailsTobacco withTypes(EmployeeEditRequestPersonDetailsTobaccoTypesEnum[] types) {
        this.types = types;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public Boolean user;
    public EmployeeEditRequestPersonDetailsTobacco withUser(Boolean user) {
        this.user = user;
        return this;
    }
}