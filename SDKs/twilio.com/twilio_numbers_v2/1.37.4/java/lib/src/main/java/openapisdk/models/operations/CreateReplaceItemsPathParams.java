package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateReplaceItemsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=BundleSid")
    public String bundleSid;
    public CreateReplaceItemsPathParams withBundleSid(String bundleSid) {
        this.bundleSid = bundleSid;
        return this;
    }
}