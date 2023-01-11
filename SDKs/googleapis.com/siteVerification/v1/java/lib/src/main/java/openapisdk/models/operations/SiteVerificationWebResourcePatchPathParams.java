package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SiteVerificationWebResourcePatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public SiteVerificationWebResourcePatchPathParams withId(String id) {
        this.id = id;
        return this;
    }
}