package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBundleCopyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=BundleSid")
    public String bundleSid;
    public CreateBundleCopyPathParams withBundleSid(String bundleSid) {
        this.bundleSid = bundleSid;
        return this;
    }
}