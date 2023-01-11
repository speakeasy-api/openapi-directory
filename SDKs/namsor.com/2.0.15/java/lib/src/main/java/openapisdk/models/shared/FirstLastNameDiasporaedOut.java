package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FirstLastNameDiasporaedOut
 * Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.
**/
public class FirstLastNameDiasporaedOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryIso2")
    public String countryIso2;
    public FirstLastNameDiasporaedOut withCountryIso2(String countryIso2) {
        this.countryIso2 = countryIso2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ethnicitiesTop")
    public String[] ethnicitiesTop;
    public FirstLastNameDiasporaedOut withEthnicitiesTop(String[] ethnicitiesTop) {
        this.ethnicitiesTop = ethnicitiesTop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ethnicity")
    public String ethnicity;
    public FirstLastNameDiasporaedOut withEthnicity(String ethnicity) {
        this.ethnicity = ethnicity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ethnicityAlt")
    public String ethnicityAlt;
    public FirstLastNameDiasporaedOut withEthnicityAlt(String ethnicityAlt) {
        this.ethnicityAlt = ethnicityAlt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public FirstLastNameDiasporaedOut withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public FirstLastNameDiasporaedOut withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public FirstLastNameDiasporaedOut withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifted")
    public Boolean lifted;
    public FirstLastNameDiasporaedOut withLifted(Boolean lifted) {
        this.lifted = lifted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Double score;
    public FirstLastNameDiasporaedOut withScore(Double score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public FirstLastNameDiasporaedOut withScript(String script) {
        this.script = script;
        return this;
    }
}