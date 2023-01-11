package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetstateabbreviationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=license")
    public String license;
    public GetstateabbreviationQueryParams withLicense(String license) {
        this.license = license;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String state;
    public GetstateabbreviationQueryParams withState(String state) {
        this.state = state;
        return this;
    }
}