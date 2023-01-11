package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FirstLastNameGenderedOut
 * Represents the output of inferring the LIKELY gender from a personal name.
**/
public class FirstLastNameGenderedOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public FirstLastNameGenderedOut withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("genderScale")
    public Double genderScale;
    public FirstLastNameGenderedOut withGenderScale(Double genderScale) {
        this.genderScale = genderScale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public FirstLastNameGenderedOut withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public FirstLastNameGenderedOut withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("likelyGender")
    public FirstLastNameGenderedOutLikelyGenderEnum likelyGender;
    public FirstLastNameGenderedOut withLikelyGender(FirstLastNameGenderedOutLikelyGenderEnum likelyGender) {
        this.likelyGender = likelyGender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("probabilityCalibrated")
    public Double probabilityCalibrated;
    public FirstLastNameGenderedOut withProbabilityCalibrated(Double probabilityCalibrated) {
        this.probabilityCalibrated = probabilityCalibrated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Double score;
    public FirstLastNameGenderedOut withScore(Double score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public FirstLastNameGenderedOut withScript(String script) {
        this.script = script;
        return this;
    }
}