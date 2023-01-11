package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatePayeeAddress2 {
    @JsonProperty("city")
    public String city;
    public CreatePayeeAddress2 withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public CreatePayeeAddress2CountryEnum country;
    public CreatePayeeAddress2 withCountry(CreatePayeeAddress2CountryEnum country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countyOrProvince")
    public String countyOrProvince;
    public CreatePayeeAddress2 withCountyOrProvince(String countyOrProvince) {
        this.countyOrProvince = countyOrProvince;
        return this;
    }
    @JsonProperty("line1")
    public String line1;
    public CreatePayeeAddress2 withLine1(String line1) {
        this.line1 = line1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line2")
    public String line2;
    public CreatePayeeAddress2 withLine2(String line2) {
        this.line2 = line2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line3")
    public String line3;
    public CreatePayeeAddress2 withLine3(String line3) {
        this.line3 = line3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line4")
    public String line4;
    public CreatePayeeAddress2 withLine4(String line4) {
        this.line4 = line4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zipOrPostcode")
    public String zipOrPostcode;
    public CreatePayeeAddress2 withZipOrPostcode(String zipOrPostcode) {
        this.zipOrPostcode = zipOrPostcode;
        return this;
    }
}