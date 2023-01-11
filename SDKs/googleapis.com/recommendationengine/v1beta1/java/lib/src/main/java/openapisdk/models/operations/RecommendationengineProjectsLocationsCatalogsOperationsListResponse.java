package openapisdk.models.operations;



public class RecommendationengineProjectsLocationsCatalogsOperationsListResponse {
    public String contentType;
    public RecommendationengineProjectsLocationsCatalogsOperationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningListOperationsResponse googleLongrunningListOperationsResponse;
    public RecommendationengineProjectsLocationsCatalogsOperationsListResponse withGoogleLongrunningListOperationsResponse(openapisdk.models.shared.GoogleLongrunningListOperationsResponse googleLongrunningListOperationsResponse) {
        this.googleLongrunningListOperationsResponse = googleLongrunningListOperationsResponse;
        return this;
    }
    public Long statusCode;
    public RecommendationengineProjectsLocationsCatalogsOperationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}