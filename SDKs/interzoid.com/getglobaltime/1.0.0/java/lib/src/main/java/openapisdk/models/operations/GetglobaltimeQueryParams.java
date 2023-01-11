package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetglobaltimeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=license")
    public String license;
    public GetglobaltimeQueryParams withLicense(String license) {
        this.license = license;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locale")
    public String locale;
    public GetglobaltimeQueryParams withLocale(String locale) {
        this.locale = locale;
        return this;
    }
}