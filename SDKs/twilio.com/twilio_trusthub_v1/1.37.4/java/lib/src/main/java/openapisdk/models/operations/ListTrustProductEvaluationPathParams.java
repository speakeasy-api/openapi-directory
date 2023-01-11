package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTrustProductEvaluationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrustProductSid")
    public String trustProductSid;
    public ListTrustProductEvaluationPathParams withTrustProductSid(String trustProductSid) {
        this.trustProductSid = trustProductSid;
        return this;
    }
}