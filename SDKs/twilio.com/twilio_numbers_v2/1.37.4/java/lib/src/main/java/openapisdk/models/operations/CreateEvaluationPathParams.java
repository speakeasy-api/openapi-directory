package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEvaluationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=BundleSid")
    public String bundleSid;
    public CreateEvaluationPathParams withBundleSid(String bundleSid) {
        this.bundleSid = bundleSid;
        return this;
    }
}