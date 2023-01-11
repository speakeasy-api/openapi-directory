package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FirstLastNameOriginedOut
 * Represents the output of inferring the LIKELY country of Origin from a personal name.
**/
public class FirstLastNameOriginedOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countriesOriginTop")
    public String[] countriesOriginTop;
    public FirstLastNameOriginedOut withCountriesOriginTop(String[] countriesOriginTop) {
        this.countriesOriginTop = countriesOriginTop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryOrigin")
    public String countryOrigin;
    public FirstLastNameOriginedOut withCountryOrigin(String countryOrigin) {
        this.countryOrigin = countryOrigin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryOriginAlt")
    public String countryOriginAlt;
    public FirstLastNameOriginedOut withCountryOriginAlt(String countryOriginAlt) {
        this.countryOriginAlt = countryOriginAlt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public FirstLastNameOriginedOut withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public FirstLastNameOriginedOut withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public FirstLastNameOriginedOut withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("probabilityAltCalibrated")
    public Double probabilityAltCalibrated;
    public FirstLastNameOriginedOut withProbabilityAltCalibrated(Double probabilityAltCalibrated) {
        this.probabilityAltCalibrated = probabilityAltCalibrated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("probabilityCalibrated")
    public Double probabilityCalibrated;
    public FirstLastNameOriginedOut withProbabilityCalibrated(Double probabilityCalibrated) {
        this.probabilityCalibrated = probabilityCalibrated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionOrigin")
    public String regionOrigin;
    public FirstLastNameOriginedOut withRegionOrigin(String regionOrigin) {
        this.regionOrigin = regionOrigin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Double score;
    public FirstLastNameOriginedOut withScore(Double score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public FirstLastNameOriginedOut withScript(String script) {
        this.script = script;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subRegionOrigin")
    public String subRegionOrigin;
    public FirstLastNameOriginedOut withSubRegionOrigin(String subRegionOrigin) {
        this.subRegionOrigin = subRegionOrigin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topRegionOrigin")
    public String topRegionOrigin;
    public FirstLastNameOriginedOut withTopRegionOrigin(String topRegionOrigin) {
        this.topRegionOrigin = topRegionOrigin;
        return this;
    }
}