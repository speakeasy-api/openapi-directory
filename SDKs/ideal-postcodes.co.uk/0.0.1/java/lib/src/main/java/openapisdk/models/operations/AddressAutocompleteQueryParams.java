package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddressAutocompleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=licensee")
    public String licensee;
    public AddressAutocompleteQueryParams withLicensee(String licensee) {
        this.licensee = licensee;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public AddressAutocompleteQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=postcode_outward")
    public String postcodeOutward;
    public AddressAutocompleteQueryParams withPostcodeOutward(String postcodeOutward) {
        this.postcodeOutward = postcodeOutward;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public AddressAutocompleteQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}