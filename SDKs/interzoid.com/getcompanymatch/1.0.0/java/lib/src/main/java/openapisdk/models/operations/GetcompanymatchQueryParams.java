package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetcompanymatchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=company")
    public String company;
    public GetcompanymatchQueryParams withCompany(String company) {
        this.company = company;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=license")
    public String license;
    public GetcompanymatchQueryParams withLicense(String license) {
        this.license = license;
        return this;
    }
}