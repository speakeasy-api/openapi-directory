package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetaddressmatchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=address")
    public String address;
    public GetaddressmatchQueryParams withAddress(String address) {
        this.address = address;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=license")
    public String license;
    public GetaddressmatchQueryParams withLicense(String license) {
        this.license = license;
        return this;
    }
}