package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Getcurrencyrate200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public String code;
    public Getcurrencyrate200ApplicationJson withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Country")
    public String country;
    public Getcurrencyrate200ApplicationJson withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Credits")
    public String credits;
    public Getcurrencyrate200ApplicationJson withCredits(String credits) {
        this.credits = credits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public Getcurrencyrate200ApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Rate")
    public String rate;
    public Getcurrencyrate200ApplicationJson withRate(String rate) {
        this.rate = rate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Symbol")
    public String symbol;
    public Getcurrencyrate200ApplicationJson withSymbol(String symbol) {
        this.symbol = symbol;
        return this;
    }
}