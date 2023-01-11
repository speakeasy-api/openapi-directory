package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Vaccine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dose")
    public Double dose;
    public Vaccine withDose(Double dose) {
        this.dose = dose;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identityType")
    public String identityType;
    public Vaccine withIdentityType(String identityType) {
        this.identityType = identityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identityValue")
    public String identityValue;
    public Vaccine withIdentityValue(String identityValue) {
        this.identityValue = identityValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vaccinatedBy")
    public String vaccinatedBy;
    public Vaccine withVaccinatedBy(String vaccinatedBy) {
        this.vaccinatedBy = vaccinatedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vaccinationDate")
    public String vaccinationDate;
    public Vaccine withVaccinationDate(String vaccinationDate) {
        this.vaccinationDate = vaccinationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vaccinationPlace")
    public String vaccinationPlace;
    public Vaccine withVaccinationPlace(String vaccinationPlace) {
        this.vaccinationPlace = vaccinationPlace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vaccinationStatus")
    public String vaccinationStatus;
    public Vaccine withVaccinationStatus(String vaccinationStatus) {
        this.vaccinationStatus = vaccinationStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vaccineName")
    public String vaccineName;
    public Vaccine withVaccineName(String vaccineName) {
        this.vaccineName = vaccineName;
        return this;
    }
}