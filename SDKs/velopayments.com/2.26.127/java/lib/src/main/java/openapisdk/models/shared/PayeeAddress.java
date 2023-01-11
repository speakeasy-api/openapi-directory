package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PayeeAddress {
    @JsonProperty("city")
    public String city;
    public PayeeAddress withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public PayeeAddress withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countyOrProvince")
    public String countyOrProvince;
    public PayeeAddress withCountyOrProvince(String countyOrProvince) {
        this.countyOrProvince = countyOrProvince;
        return this;
    }
    @JsonProperty("line1")
    public String line1;
    public PayeeAddress withLine1(String line1) {
        this.line1 = line1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line2")
    public String line2;
    public PayeeAddress withLine2(String line2) {
        this.line2 = line2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line3")
    public String line3;
    public PayeeAddress withLine3(String line3) {
        this.line3 = line3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line4")
    public String line4;
    public PayeeAddress withLine4(String line4) {
        this.line4 = line4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zipOrPostcode")
    public String zipOrPostcode;
    public PayeeAddress withZipOrPostcode(String zipOrPostcode) {
        this.zipOrPostcode = zipOrPostcode;
        return this;
    }
}