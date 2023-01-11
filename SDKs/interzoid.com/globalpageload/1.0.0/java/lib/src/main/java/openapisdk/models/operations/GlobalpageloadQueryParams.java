package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GlobalpageloadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=license")
    public String license;
    public GlobalpageloadQueryParams withLicense(String license) {
        this.license = license;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=origin")
    public String origin;
    public GlobalpageloadQueryParams withOrigin(String origin) {
        this.origin = origin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=url")
    public String url;
    public GlobalpageloadQueryParams withUrl(String url) {
        this.url = url;
        return this;
    }
}