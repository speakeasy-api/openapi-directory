package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VeteranStatusRequest
 * Attributes required to retrieve a Veteran's status
**/
public class VeteranStatusRequest {
    @JsonProperty("birth_date")
    public String birthDate;
    public VeteranStatusRequest withBirthDate(String birthDate) {
        this.birthDate = birthDate;
        return this;
    }
    @JsonProperty("first_name")
    public String firstName;
    public VeteranStatusRequest withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gender")
    public VeteranStatusRequestGenderEnum gender;
    public VeteranStatusRequest withGender(VeteranStatusRequestGenderEnum gender) {
        this.gender = gender;
        return this;
    }
    @JsonProperty("last_name")
    public String lastName;
    public VeteranStatusRequest withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("middle_name")
    public String middleName;
    public VeteranStatusRequest withMiddleName(String middleName) {
        this.middleName = middleName;
        return this;
    }
    @JsonProperty("ssn")
    public String ssn;
    public VeteranStatusRequest withSsn(String ssn) {
        this.ssn = ssn;
        return this;
    }
}