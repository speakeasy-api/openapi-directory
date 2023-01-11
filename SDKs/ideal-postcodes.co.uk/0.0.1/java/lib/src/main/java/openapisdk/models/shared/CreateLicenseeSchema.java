package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateLicenseeSchema {
    @JsonProperty("address")
    public String address;
    public CreateLicenseeSchema withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("daily")
    public CreateLicenseeDaily daily;
    public CreateLicenseeSchema withDaily(CreateLicenseeDaily daily) {
        this.daily = daily;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateLicenseeSchema withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("postcode")
    public String postcode;
    public CreateLicenseeSchema withPostcode(String postcode) {
        this.postcode = postcode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whitelist")
    public String[] whitelist;
    public CreateLicenseeSchema withWhitelist(String[] whitelist) {
        this.whitelist = whitelist;
        return this;
    }
}