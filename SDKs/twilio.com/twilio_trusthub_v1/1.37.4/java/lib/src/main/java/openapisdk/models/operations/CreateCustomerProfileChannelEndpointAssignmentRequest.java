package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCustomerProfileChannelEndpointAssignmentRequest {
    public String serverURL;
    public CreateCustomerProfileChannelEndpointAssignmentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateCustomerProfileChannelEndpointAssignmentPathParams pathParams;
    public CreateCustomerProfileChannelEndpointAssignmentRequest withPathParams(CreateCustomerProfileChannelEndpointAssignmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest request;
    public CreateCustomerProfileChannelEndpointAssignmentRequest withRequest(CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest request) {
        this.request = request;
        return this;
    }
    public CreateCustomerProfileChannelEndpointAssignmentSecurity security;
    public CreateCustomerProfileChannelEndpointAssignmentRequest withSecurity(CreateCustomerProfileChannelEndpointAssignmentSecurity security) {
        this.security = security;
        return this;
    }
}