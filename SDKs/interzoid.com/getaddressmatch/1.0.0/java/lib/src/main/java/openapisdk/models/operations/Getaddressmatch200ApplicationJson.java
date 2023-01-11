package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Getaddressmatch200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public String code;
    public Getaddressmatch200ApplicationJson withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Credits")
    public String credits;
    public Getaddressmatch200ApplicationJson withCredits(String credits) {
        this.credits = credits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Simkey")
    public String simkey;
    public Getaddressmatch200ApplicationJson withSimkey(String simkey) {
        this.simkey = simkey;
        return this;
    }
}