package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBundlePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateBundlePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}