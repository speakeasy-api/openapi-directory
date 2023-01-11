package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddressAutocompleteHit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suggestion")
    public String suggestion;
    public AddressAutocompleteHit withSuggestion(String suggestion) {
        this.suggestion = suggestion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("udprn")
    public String udprn;
    public AddressAutocompleteHit withUdprn(String udprn) {
        this.udprn = udprn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("umprn")
    public String umprn;
    public AddressAutocompleteHit withUmprn(String umprn) {
        this.umprn = umprn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urls")
    public AddressAutocompleteHitUrls urls;
    public AddressAutocompleteHit withUrls(AddressAutocompleteHitUrls urls) {
        this.urls = urls;
        return this;
    }
}