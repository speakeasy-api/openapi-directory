package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListItemAssignmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=BundleSid")
    public String bundleSid;
    public ListItemAssignmentPathParams withBundleSid(String bundleSid) {
        this.bundleSid = bundleSid;
        return this;
    }
}