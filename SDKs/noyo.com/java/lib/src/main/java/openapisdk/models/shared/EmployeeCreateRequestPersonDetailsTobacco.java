package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeCreateRequestPersonDetailsTobacco
 * Tobacco usage details (if applicable)
**/
public class EmployeeCreateRequestPersonDetailsTobacco {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public EmployeeCreateRequestPersonDetailsTobacco withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequency")
    public String frequency;
    public EmployeeCreateRequestPersonDetailsTobacco withFrequency(String frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("types")
    public EmployeeCreateRequestPersonDetailsTobaccoTypesEnum[] types;
    public EmployeeCreateRequestPersonDetailsTobacco withTypes(EmployeeCreateRequestPersonDetailsTobaccoTypesEnum[] types) {
        this.types = types;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public Boolean user;
    public EmployeeCreateRequestPersonDetailsTobacco withUser(Boolean user) {
        this.user = user;
        return this;
    }
}