package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Getzipcodeinfo200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AreaSquareMiles")
    public String areaSquareMiles;
    public Getzipcodeinfo200ApplicationJson withAreaSquareMiles(String areaSquareMiles) {
        this.areaSquareMiles = areaSquareMiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("City")
    public String city;
    public Getzipcodeinfo200ApplicationJson withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public String code;
    public Getzipcodeinfo200ApplicationJson withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Credits")
    public String credits;
    public Getzipcodeinfo200ApplicationJson withCredits(String credits) {
        this.credits = credits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ElderlyHouseholdPercent")
    public String elderlyHouseholdPercent;
    public Getzipcodeinfo200ApplicationJson withElderlyHouseholdPercent(String elderlyHouseholdPercent) {
        this.elderlyHouseholdPercent = elderlyHouseholdPercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FarmerHouseholdPercent")
    public String farmerHouseholdPercent;
    public Getzipcodeinfo200ApplicationJson withFarmerHouseholdPercent(String farmerHouseholdPercent) {
        this.farmerHouseholdPercent = farmerHouseholdPercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncomePercent100k")
    public String incomePercent100k;
    public Getzipcodeinfo200ApplicationJson withIncomePercent100k(String incomePercent100k) {
        this.incomePercent100k = incomePercent100k;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncomePercent200k")
    public String incomePercent200k;
    public Getzipcodeinfo200ApplicationJson withIncomePercent200k(String incomePercent200k) {
        this.incomePercent200k = incomePercent200k;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncomePercent50k")
    public String incomePercent50k;
    public Getzipcodeinfo200ApplicationJson withIncomePercent50k(String incomePercent50k) {
        this.incomePercent50k = incomePercent50k;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Latitude")
    public String latitude;
    public Getzipcodeinfo200ApplicationJson withLatitude(String latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Longitude")
    public String longitude;
    public Getzipcodeinfo200ApplicationJson withLongitude(String longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MarriedHouseholdPercent")
    public String marriedHouseholdPercent;
    public Getzipcodeinfo200ApplicationJson withMarriedHouseholdPercent(String marriedHouseholdPercent) {
        this.marriedHouseholdPercent = marriedHouseholdPercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Population")
    public String population;
    public Getzipcodeinfo200ApplicationJson withPopulation(String population) {
        this.population = population;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public String state;
    public Getzipcodeinfo200ApplicationJson withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ZipCode")
    public String zipCode;
    public Getzipcodeinfo200ApplicationJson withZipCode(String zipCode) {
        this.zipCode = zipCode;
        return this;
    }
}