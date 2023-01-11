package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateLicenseeSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public UpdateLicenseeSchema withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("daily")
    public CreateLicenseeDaily daily;
    public UpdateLicenseeSchema withDaily(CreateLicenseeDaily daily) {
        this.daily = daily;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postcode")
    public String postcode;
    public UpdateLicenseeSchema withPostcode(String postcode) {
        this.postcode = postcode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whitelist")
    public String[] whitelist;
    public UpdateLicenseeSchema withWhitelist(String[] whitelist) {
        this.whitelist = whitelist;
        return this;
    }
}