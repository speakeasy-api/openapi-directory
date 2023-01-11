package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Getglobalnumberinfo200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public String code;
    public Getglobalnumberinfo200ApplicationJson withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Country")
    public String country;
    public Getglobalnumberinfo200ApplicationJson withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Credits")
    public String credits;
    public Getglobalnumberinfo200ApplicationJson withCredits(String credits) {
        this.credits = credits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Language2")
    public String language2;
    public Getglobalnumberinfo200ApplicationJson withLanguage2(String language2) {
        this.language2 = language2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Language3")
    public String language3;
    public Getglobalnumberinfo200ApplicationJson withLanguage3(String language3) {
        this.language3 = language3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Mobile")
    public String mobile;
    public Getglobalnumberinfo200ApplicationJson withMobile(String mobile) {
        this.mobile = mobile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrimaryCity")
    public String primaryCity;
    public Getglobalnumberinfo200ApplicationJson withPrimaryCity(String primaryCity) {
        this.primaryCity = primaryCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrimaryLanguage")
    public String primaryLanguage;
    public Getglobalnumberinfo200ApplicationJson withPrimaryLanguage(String primaryLanguage) {
        this.primaryLanguage = primaryLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Region")
    public String region;
    public Getglobalnumberinfo200ApplicationJson withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Wealth")
    public String wealth;
    public Getglobalnumberinfo200ApplicationJson withWealth(String wealth) {
        this.wealth = wealth;
        return this;
    }
}