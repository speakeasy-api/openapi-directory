package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostalAddress6Ch
 * as in ISO pain.001.001.03.ch.02 PostalAddress6
 * If possible structured. Simultaneous use of the structured elements <StrtNm>/ <BldgNb>/<PstCd>/<TwnNm> and the unstructured element <AdrLine> is not permitted.
 * as in ISO pain.001.001.03.ch.02 PostalAddress6-CH
 * 
**/
public class PostalAddress6Ch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addressLine1")
    public String addressLine1;
    public PostalAddress6Ch withAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addressLine2")
    public String addressLine2;
    public PostalAddress6Ch withAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildingNumber")
    public String buildingNumber;
    public PostalAddress6Ch withBuildingNumber(String buildingNumber) {
        this.buildingNumber = buildingNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public PostalAddress6Ch withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postCode")
    public String postCode;
    public PostalAddress6Ch withPostCode(String postCode) {
        this.postCode = postCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streetName")
    public String streetName;
    public PostalAddress6Ch withStreetName(String streetName) {
        this.streetName = streetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("townName")
    public String townName;
    public PostalAddress6Ch withTownName(String townName) {
        this.townName = townName;
        return this;
    }
}