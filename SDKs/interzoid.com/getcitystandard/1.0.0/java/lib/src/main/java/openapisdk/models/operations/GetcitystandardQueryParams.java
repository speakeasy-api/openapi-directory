package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetcitystandardQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=city")
    public String city;
    public GetcitystandardQueryParams withCity(String city) {
        this.city = city;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=license")
    public String license;
    public GetcitystandardQueryParams withLicense(String license) {
        this.license = license;
        return this;
    }
}