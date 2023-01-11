package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchTrustProductChannelEndpointAssignmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchTrustProductChannelEndpointAssignmentPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrustProductSid")
    public String trustProductSid;
    public FetchTrustProductChannelEndpointAssignmentPathParams withTrustProductSid(String trustProductSid) {
        this.trustProductSid = trustProductSid;
        return this;
    }
}