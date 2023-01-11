package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VaccineResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("age")
    public Double age;
    public VaccineResponse withAge(Double age) {
        this.age = age;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public VaccineResponse withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gender")
    public String gender;
    public VaccineResponse withGender(String gender) {
        this.gender = gender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public VaccineResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vaccinations")
    public Vaccine[] vaccinations;
    public VaccineResponse withVaccinations(Vaccine[] vaccinations) {
        this.vaccinations = vaccinations;
        return this;
    }
}