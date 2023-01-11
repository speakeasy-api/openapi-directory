package openapisdk.models.operations;



public class DatalabelingProjectsOperationsListResponse {
    public String contentType;
    public DatalabelingProjectsOperationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningListOperationsResponse googleLongrunningListOperationsResponse;
    public DatalabelingProjectsOperationsListResponse withGoogleLongrunningListOperationsResponse(openapisdk.models.shared.GoogleLongrunningListOperationsResponse googleLongrunningListOperationsResponse) {
        this.googleLongrunningListOperationsResponse = googleLongrunningListOperationsResponse;
        return this;
    }
    public Long statusCode;
    public DatalabelingProjectsOperationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}