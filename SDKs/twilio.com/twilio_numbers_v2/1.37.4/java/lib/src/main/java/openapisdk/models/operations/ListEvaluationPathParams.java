package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEvaluationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=BundleSid")
    public String bundleSid;
    public ListEvaluationPathParams withBundleSid(String bundleSid) {
        this.bundleSid = bundleSid;
        return this;
    }
}