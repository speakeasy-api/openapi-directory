package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchTrustProductEntityAssignmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchTrustProductEntityAssignmentPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrustProductSid")
    public String trustProductSid;
    public FetchTrustProductEntityAssignmentPathParams withTrustProductSid(String trustProductSid) {
        this.trustProductSid = trustProductSid;
        return this;
    }
}