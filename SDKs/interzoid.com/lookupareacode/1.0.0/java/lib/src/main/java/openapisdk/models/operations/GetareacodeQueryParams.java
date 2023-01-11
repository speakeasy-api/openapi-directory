package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetareacodeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=areacode")
    public String areacode;
    public GetareacodeQueryParams withAreacode(String areacode) {
        this.areacode = areacode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=license")
    public String license;
    public GetareacodeQueryParams withLicense(String license) {
        this.license = license;
        return this;
    }
}