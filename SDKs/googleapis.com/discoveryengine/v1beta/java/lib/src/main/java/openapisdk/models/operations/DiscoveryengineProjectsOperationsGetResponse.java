package openapisdk.models.operations;



public class DiscoveryengineProjectsOperationsGetResponse {
    public String contentType;
    public DiscoveryengineProjectsOperationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public DiscoveryengineProjectsOperationsGetResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public DiscoveryengineProjectsOperationsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}