package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FirstLastNameUsRaceEthnicityOut
 * Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.
**/
public class FirstLastNameUsRaceEthnicityOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public FirstLastNameUsRaceEthnicityOut withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public FirstLastNameUsRaceEthnicityOut withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public FirstLastNameUsRaceEthnicityOut withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("probabilityAltCalibrated")
    public Double probabilityAltCalibrated;
    public FirstLastNameUsRaceEthnicityOut withProbabilityAltCalibrated(Double probabilityAltCalibrated) {
        this.probabilityAltCalibrated = probabilityAltCalibrated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("probabilityCalibrated")
    public Double probabilityCalibrated;
    public FirstLastNameUsRaceEthnicityOut withProbabilityCalibrated(Double probabilityCalibrated) {
        this.probabilityCalibrated = probabilityCalibrated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("raceEthnicitiesTop")
    public String[] raceEthnicitiesTop;
    public FirstLastNameUsRaceEthnicityOut withRaceEthnicitiesTop(String[] raceEthnicitiesTop) {
        this.raceEthnicitiesTop = raceEthnicitiesTop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("raceEthnicity")
    public FirstLastNameUsRaceEthnicityOutRaceEthnicityEnum raceEthnicity;
    public FirstLastNameUsRaceEthnicityOut withRaceEthnicity(FirstLastNameUsRaceEthnicityOutRaceEthnicityEnum raceEthnicity) {
        this.raceEthnicity = raceEthnicity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("raceEthnicityAlt")
    public FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnum raceEthnicityAlt;
    public FirstLastNameUsRaceEthnicityOut withRaceEthnicityAlt(FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnum raceEthnicityAlt) {
        this.raceEthnicityAlt = raceEthnicityAlt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Double score;
    public FirstLastNameUsRaceEthnicityOut withScore(Double score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public FirstLastNameUsRaceEthnicityOut withScript(String script) {
        this.script = script;
        return this;
    }
}