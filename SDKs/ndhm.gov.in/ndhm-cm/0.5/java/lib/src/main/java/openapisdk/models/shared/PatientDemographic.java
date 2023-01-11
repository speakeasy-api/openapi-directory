package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PatientDemographic
 * Demographic details must be same as registered
**/
public class PatientDemographic {
    @JsonProperty("dateOfBirth")
    public String dateOfBirth;
    public PatientDemographic withDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }
    @JsonProperty("gender")
    public PatientGenderEnum gender;
    public PatientDemographic withGender(PatientGenderEnum gender) {
        this.gender = gender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identifier")
    public AuthConfirmIdentifier identifier;
    public PatientDemographic withIdentifier(AuthConfirmIdentifier identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PatientDemographic withName(String name) {
        this.name = name;
        return this;
    }
}