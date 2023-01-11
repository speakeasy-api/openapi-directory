package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Getareacode200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Abbreviation")
    public String abbreviation;
    public Getareacode200ApplicationJson withAbbreviation(String abbreviation) {
        this.abbreviation = abbreviation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AreaCode")
    public String areaCode;
    public Getareacode200ApplicationJson withAreaCode(String areaCode) {
        this.areaCode = areaCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public String code;
    public Getareacode200ApplicationJson withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Credits")
    public String credits;
    public Getareacode200ApplicationJson withCredits(String credits) {
        this.credits = credits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Locale")
    public String locale;
    public Getareacode200ApplicationJson withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrimaryCity")
    public String primaryCity;
    public Getareacode200ApplicationJson withPrimaryCity(String primaryCity) {
        this.primaryCity = primaryCity;
        return this;
    }
}