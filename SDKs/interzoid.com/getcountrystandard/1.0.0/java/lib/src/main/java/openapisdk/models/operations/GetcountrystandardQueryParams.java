package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetcountrystandardQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;
    public GetcountrystandardQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=license")
    public String license;
    public GetcountrystandardQueryParams withLicense(String license) {
        this.license = license;
        return this;
    }
}