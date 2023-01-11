package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchTrustProductEvaluationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchTrustProductEvaluationPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrustProductSid")
    public String trustProductSid;
    public FetchTrustProductEvaluationPathParams withTrustProductSid(String trustProductSid) {
        this.trustProductSid = trustProductSid;
        return this;
    }
}