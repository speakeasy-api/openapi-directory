package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetfullnamematchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fullname")
    public String fullname;
    public GetfullnamematchQueryParams withFullname(String fullname) {
        this.fullname = fullname;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=license")
    public String license;
    public GetfullnamematchQueryParams withLicense(String license) {
        this.license = license;
        return this;
    }
}