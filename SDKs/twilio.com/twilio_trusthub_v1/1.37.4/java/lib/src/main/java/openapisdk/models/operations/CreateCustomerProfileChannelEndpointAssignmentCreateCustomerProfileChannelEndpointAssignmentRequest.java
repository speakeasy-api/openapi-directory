package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest {
    @SpeakeasyMetadata("form:name=ChannelEndpointSid")
    public String channelEndpointSid;
    public CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest withChannelEndpointSid(String channelEndpointSid) {
        this.channelEndpointSid = channelEndpointSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=ChannelEndpointType")
    public String channelEndpointType;
    public CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest withChannelEndpointType(String channelEndpointType) {
        this.channelEndpointType = channelEndpointType;
        return this;
    }
}