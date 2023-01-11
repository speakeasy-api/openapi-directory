package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Getstateabbreviation200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Abbreviation")
    public String abbreviation;
    public Getstateabbreviation200ApplicationJson withAbbreviation(String abbreviation) {
        this.abbreviation = abbreviation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public String code;
    public Getstateabbreviation200ApplicationJson withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Credits")
    public String credits;
    public Getstateabbreviation200ApplicationJson withCredits(String credits) {
        this.credits = credits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public String state;
    public Getstateabbreviation200ApplicationJson withState(String state) {
        this.state = state;
        return this;
    }
}