package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SiteVerificationWebResourceUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public SiteVerificationWebResourceUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}