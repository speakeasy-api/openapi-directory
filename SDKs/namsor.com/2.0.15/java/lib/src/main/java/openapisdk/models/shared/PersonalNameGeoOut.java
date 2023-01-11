package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PersonalNameGeoOut
 * Classified geo names
**/
public class PersonalNameGeoOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countriesTop")
    public String[] countriesTop;
    public PersonalNameGeoOut withCountriesTop(String[] countriesTop) {
        this.countriesTop = countriesTop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public PersonalNameGeoOut withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryAlt")
    public String countryAlt;
    public PersonalNameGeoOut withCountryAlt(String countryAlt) {
        this.countryAlt = countryAlt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PersonalNameGeoOut withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PersonalNameGeoOut withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("probabilityAltCalibrated")
    public Double probabilityAltCalibrated;
    public PersonalNameGeoOut withProbabilityAltCalibrated(Double probabilityAltCalibrated) {
        this.probabilityAltCalibrated = probabilityAltCalibrated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("probabilityCalibrated")
    public Double probabilityCalibrated;
    public PersonalNameGeoOut withProbabilityCalibrated(Double probabilityCalibrated) {
        this.probabilityCalibrated = probabilityCalibrated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public PersonalNameGeoOut withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Double score;
    public PersonalNameGeoOut withScore(Double score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public PersonalNameGeoOut withScript(String script) {
        this.script = script;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subRegion")
    public String subRegion;
    public PersonalNameGeoOut withSubRegion(String subRegion) {
        this.subRegion = subRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topRegion")
    public String topRegion;
    public PersonalNameGeoOut withTopRegion(String topRegion) {
        this.topRegion = topRegion;
        return this;
    }
}