package openapisdk.models.operations;



public class RecommendationengineProjectsLocationsCatalogsOperationsGetResponse {
    public String contentType;
    public RecommendationengineProjectsLocationsCatalogsOperationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public RecommendationengineProjectsLocationsCatalogsOperationsGetResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public RecommendationengineProjectsLocationsCatalogsOperationsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}