package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTrustProductChannelEndpointAssignmentCreateTrustProductChannelEndpointAssignmentRequest {
    @SpeakeasyMetadata("form:name=ChannelEndpointSid")
    public String channelEndpointSid;
    public CreateTrustProductChannelEndpointAssignmentCreateTrustProductChannelEndpointAssignmentRequest withChannelEndpointSid(String channelEndpointSid) {
        this.channelEndpointSid = channelEndpointSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=ChannelEndpointType")
    public String channelEndpointType;
    public CreateTrustProductChannelEndpointAssignmentCreateTrustProductChannelEndpointAssignmentRequest withChannelEndpointType(String channelEndpointType) {
        this.channelEndpointType = channelEndpointType;
        return this;
    }
}