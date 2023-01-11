package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBundlePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteBundlePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}