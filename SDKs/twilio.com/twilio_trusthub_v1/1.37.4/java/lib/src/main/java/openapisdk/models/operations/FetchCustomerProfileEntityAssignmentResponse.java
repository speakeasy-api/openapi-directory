package openapisdk.models.operations;



public class FetchCustomerProfileEntityAssignmentResponse {
    public String contentType;
    public FetchCustomerProfileEntityAssignmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchCustomerProfileEntityAssignmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment trusthubV1CustomerProfileCustomerProfileEntityAssignment;
    public FetchCustomerProfileEntityAssignmentResponse withTrusthubV1CustomerProfileCustomerProfileEntityAssignment(openapisdk.models.shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment trusthubV1CustomerProfileCustomerProfileEntityAssignment) {
        this.trusthubV1CustomerProfileCustomerProfileEntityAssignment = trusthubV1CustomerProfileCustomerProfileEntityAssignment;
        return this;
    }
}