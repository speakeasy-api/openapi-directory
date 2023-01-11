package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetweatherzipcodeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=license")
    public String license;
    public GetweatherzipcodeQueryParams withLicense(String license) {
        this.license = license;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=zip")
    public String zip;
    public GetweatherzipcodeQueryParams withZip(String zip) {
        this.zip = zip;
        return this;
    }
}