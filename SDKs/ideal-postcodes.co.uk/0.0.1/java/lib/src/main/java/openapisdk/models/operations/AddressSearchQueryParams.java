package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddressSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public AddressSearchQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=licensee")
    public String licensee;
    public AddressSearchQueryParams withLicensee(String licensee) {
        this.licensee = licensee;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public AddressSearchQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public AddressSearchQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=postcode_outward")
    public String postcodeOutward;
    public AddressSearchQueryParams withPostcodeOutward(String postcodeOutward) {
        this.postcodeOutward = postcodeOutward;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public AddressSearchQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}