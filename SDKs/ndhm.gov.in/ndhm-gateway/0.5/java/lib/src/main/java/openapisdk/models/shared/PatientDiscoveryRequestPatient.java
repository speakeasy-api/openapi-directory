package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatientDiscoveryRequestPatient {
    @JsonProperty("gender")
    public PatientGenderEnum gender;
    public PatientDiscoveryRequestPatient withGender(PatientGenderEnum gender) {
        this.gender = gender;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public PatientDiscoveryRequestPatient withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PatientDiscoveryRequestPatient withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unverifiedIdentifiers")
    public Identifier[] unverifiedIdentifiers;
    public PatientDiscoveryRequestPatient withUnverifiedIdentifiers(Identifier[] unverifiedIdentifiers) {
        this.unverifiedIdentifiers = unverifiedIdentifiers;
        return this;
    }
    @JsonProperty("verifiedIdentifiers")
    public Identifier[] verifiedIdentifiers;
    public PatientDiscoveryRequestPatient withVerifiedIdentifiers(Identifier[] verifiedIdentifiers) {
        this.verifiedIdentifiers = verifiedIdentifiers;
        return this;
    }
    @JsonProperty("yearOfBirth")
    public Long yearOfBirth;
    public PatientDiscoveryRequestPatient withYearOfBirth(Long yearOfBirth) {
        this.yearOfBirth = yearOfBirth;
        return this;
    }
}