package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetcountrymatchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;
    public GetcountrymatchQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=license")
    public String license;
    public GetcountrymatchQueryParams withLicense(String license) {
        this.license = license;
        return this;
    }
}