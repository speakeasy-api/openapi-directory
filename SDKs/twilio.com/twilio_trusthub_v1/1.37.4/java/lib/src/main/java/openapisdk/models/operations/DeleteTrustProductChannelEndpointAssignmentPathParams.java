package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTrustProductChannelEndpointAssignmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteTrustProductChannelEndpointAssignmentPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrustProductSid")
    public String trustProductSid;
    public DeleteTrustProductChannelEndpointAssignmentPathParams withTrustProductSid(String trustProductSid) {
        this.trustProductSid = trustProductSid;
        return this;
    }
}