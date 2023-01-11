package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PersonalNameGenderedOut
 * Classified genderized names
**/
public class PersonalNameGenderedOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("genderScale")
    public Double genderScale;
    public PersonalNameGenderedOut withGenderScale(Double genderScale) {
        this.genderScale = genderScale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PersonalNameGenderedOut withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("likelyGender")
    public PersonalNameGenderedOutLikelyGenderEnum likelyGender;
    public PersonalNameGenderedOut withLikelyGender(PersonalNameGenderedOutLikelyGenderEnum likelyGender) {
        this.likelyGender = likelyGender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PersonalNameGenderedOut withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("probabilityCalibrated")
    public Double probabilityCalibrated;
    public PersonalNameGenderedOut withProbabilityCalibrated(Double probabilityCalibrated) {
        this.probabilityCalibrated = probabilityCalibrated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Double score;
    public PersonalNameGenderedOut withScore(Double score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public PersonalNameGenderedOut withScript(String script) {
        this.script = script;
        return this;
    }
}