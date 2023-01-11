package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostcodeToAddressesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public PostcodeToAddressesQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=licensee")
    public String licensee;
    public PostcodeToAddressesQueryParams withLicensee(String licensee) {
        this.licensee = licensee;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public PostcodeToAddressesQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
}