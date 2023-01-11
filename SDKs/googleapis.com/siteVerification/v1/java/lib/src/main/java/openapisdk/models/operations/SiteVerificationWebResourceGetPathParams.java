package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SiteVerificationWebResourceGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public SiteVerificationWebResourceGetPathParams withId(String id) {
        this.id = id;
        return this;
    }
}