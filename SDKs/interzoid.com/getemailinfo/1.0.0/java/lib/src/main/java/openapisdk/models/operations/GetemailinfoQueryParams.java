package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetemailinfoQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public GetemailinfoQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=license")
    public String license;
    public GetemailinfoQueryParams withLicense(String license) {
        this.license = license;
        return this;
    }
}