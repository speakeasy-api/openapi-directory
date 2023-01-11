package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddressAutocompleteHitUrls {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("udprn")
    public String udprn;
    public AddressAutocompleteHitUrls withUdprn(String udprn) {
        this.udprn = udprn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("umprn")
    public String umprn;
    public AddressAutocompleteHitUrls withUmprn(String umprn) {
        this.umprn = umprn;
        return this;
    }
}