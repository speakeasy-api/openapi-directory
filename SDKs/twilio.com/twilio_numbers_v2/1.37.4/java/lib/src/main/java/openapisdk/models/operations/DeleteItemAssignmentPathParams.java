package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteItemAssignmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=BundleSid")
    public String bundleSid;
    public DeleteItemAssignmentPathParams withBundleSid(String bundleSid) {
        this.bundleSid = bundleSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteItemAssignmentPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}