package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatePayeeAddress {
    @JsonProperty("city")
    public String city;
    public CreatePayeeAddress withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public CreatePayeeAddressCountryEnum country;
    public CreatePayeeAddress withCountry(CreatePayeeAddressCountryEnum country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countyOrProvince")
    public String countyOrProvince;
    public CreatePayeeAddress withCountyOrProvince(String countyOrProvince) {
        this.countyOrProvince = countyOrProvince;
        return this;
    }
    @JsonProperty("line1")
    public String line1;
    public CreatePayeeAddress withLine1(String line1) {
        this.line1 = line1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line2")
    public String line2;
    public CreatePayeeAddress withLine2(String line2) {
        this.line2 = line2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line3")
    public String line3;
    public CreatePayeeAddress withLine3(String line3) {
        this.line3 = line3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line4")
    public String line4;
    public CreatePayeeAddress withLine4(String line4) {
        this.line4 = line4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zipOrPostcode")
    public String zipOrPostcode;
    public CreatePayeeAddress withZipOrPostcode(String zipOrPostcode) {
        this.zipOrPostcode = zipOrPostcode;
        return this;
    }
}