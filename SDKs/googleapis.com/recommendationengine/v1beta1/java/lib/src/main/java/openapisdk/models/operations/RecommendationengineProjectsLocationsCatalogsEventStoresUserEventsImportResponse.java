package openapisdk.models.operations;



public class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportResponse {
    public String contentType;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}