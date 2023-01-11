package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegistrationsNumber {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registration_no")
    public String registrationNo;
    public RegistrationsNumber withRegistrationNo(String registrationNo) {
        this.registrationNo = registrationNo;
        return this;
    }
    @JsonProperty("registries_activity")
    public String registriesActivity;
    public RegistrationsNumber withRegistriesActivity(String registriesActivity) {
        this.registriesActivity = registriesActivity;
        return this;
    }
}