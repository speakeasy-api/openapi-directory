package openapisdk.models.operations;



public class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeResponse {
    public String contentType;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}