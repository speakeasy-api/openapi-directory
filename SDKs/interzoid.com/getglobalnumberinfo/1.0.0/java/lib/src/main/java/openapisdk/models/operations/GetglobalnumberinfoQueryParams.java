package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetglobalnumberinfoQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=intlnumber")
    public String intlnumber;
    public GetglobalnumberinfoQueryParams withIntlnumber(String intlnumber) {
        this.intlnumber = intlnumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=license")
    public String license;
    public GetglobalnumberinfoQueryParams withLicense(String license) {
        this.license = license;
        return this;
    }
}