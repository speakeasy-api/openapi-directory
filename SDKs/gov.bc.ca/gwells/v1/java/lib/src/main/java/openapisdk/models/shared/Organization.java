package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Organization {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public Organization withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public Organization withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fax_tel")
    public String faxTel;
    public Organization withFaxTel(String faxTel) {
        this.faxTel = faxTel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("main_tel")
    public String mainTel;
    public Organization withMainTel(String mainTel) {
        this.mainTel = mainTel;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Organization withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("org_guid")
    public String orgGuid;
    public Organization withOrgGuid(String orgGuid) {
        this.orgGuid = orgGuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("org_verbose_name")
    public String orgVerboseName;
    public Organization withOrgVerboseName(String orgVerboseName) {
        this.orgVerboseName = orgVerboseName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postal_code")
    public String postalCode;
    public Organization withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonProperty("province_state")
    public String provinceState;
    public Organization withProvinceState(String provinceState) {
        this.provinceState = provinceState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_address")
    public String streetAddress;
    public Organization withStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website_url")
    public String websiteUrl;
    public Organization withWebsiteUrl(String websiteUrl) {
        this.websiteUrl = websiteUrl;
        return this;
    }
}