package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BranchModel
 * Defines a single branch of a client.
**/
public class BranchModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address1")
    public String address1;
    public BranchModel withAddress1(String address1) {
        this.address1 = address1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address2")
    public String address2;
    public BranchModel withAddress2(String address2) {
        this.address2 = address2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address3")
    public String address3;
    public BranchModel withAddress3(String address3) {
        this.address3 = address3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address4")
    public String address4;
    public BranchModel withAddress4(String address4) {
        this.address4 = address4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CompanyName")
    public String companyName;
    public BranchModel withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("County")
    public String county;
    public BranchModel withCounty(String county) {
        this.county = county;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EMailAddress")
    public String eMailAddress;
    public BranchModel withEMailAddress(String eMailAddress) {
        this.eMailAddress = eMailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ETag")
    public String eTag;
    public BranchModel withETag(String eTag) {
        this.eTag = eTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FaxPhone")
    public String faxPhone;
    public BranchModel withFaxPhone(String faxPhone) {
        this.faxPhone = faxPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LandPhone")
    public String landPhone;
    public BranchModel withLandPhone(String landPhone) {
        this.landPhone = landPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public BranchModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OID")
    public String oid;
    public BranchModel withOid(String oid) {
        this.oid = oid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Postcode")
    public String postcode;
    public BranchModel withPostcode(String postcode) {
        this.postcode = postcode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WebAddress")
    public String webAddress;
    public BranchModel withWebAddress(String webAddress) {
        this.webAddress = webAddress;
        return this;
    }
}