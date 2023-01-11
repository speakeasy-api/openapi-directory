package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchBundlePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchBundlePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}