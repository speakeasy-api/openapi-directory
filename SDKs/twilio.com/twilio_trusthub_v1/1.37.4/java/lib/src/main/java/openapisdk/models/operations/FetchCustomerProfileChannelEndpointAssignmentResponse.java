package openapisdk.models.operations;



public class FetchCustomerProfileChannelEndpointAssignmentResponse {
    public String contentType;
    public FetchCustomerProfileChannelEndpointAssignmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchCustomerProfileChannelEndpointAssignmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment;
    public FetchCustomerProfileChannelEndpointAssignmentResponse withTrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment(openapisdk.models.shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment) {
        this.trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment = trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment;
        return this;
    }
}