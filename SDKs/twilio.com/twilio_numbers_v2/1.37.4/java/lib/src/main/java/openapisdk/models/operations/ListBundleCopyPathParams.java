package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBundleCopyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=BundleSid")
    public String bundleSid;
    public ListBundleCopyPathParams withBundleSid(String bundleSid) {
        this.bundleSid = bundleSid;
        return this;
    }
}