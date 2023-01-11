package openapisdk.models.operations;



public class CreateCustomerProfileChannelEndpointAssignmentResponse {
    public String contentType;
    public CreateCustomerProfileChannelEndpointAssignmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateCustomerProfileChannelEndpointAssignmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment;
    public CreateCustomerProfileChannelEndpointAssignmentResponse withTrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment(openapisdk.models.shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment) {
        this.trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment = trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment;
        return this;
    }
}