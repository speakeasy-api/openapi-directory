package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateItemAssignmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=BundleSid")
    public String bundleSid;
    public CreateItemAssignmentPathParams withBundleSid(String bundleSid) {
        this.bundleSid = bundleSid;
        return this;
    }
}