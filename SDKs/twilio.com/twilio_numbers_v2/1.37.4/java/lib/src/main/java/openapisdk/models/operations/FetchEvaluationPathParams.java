package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchEvaluationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=BundleSid")
    public String bundleSid;
    public FetchEvaluationPathParams withBundleSid(String bundleSid) {
        this.bundleSid = bundleSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchEvaluationPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}