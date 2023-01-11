package openapisdk.models.operations;



public class RecommendationengineProjectsLocationsCatalogsCatalogItemsImportResponse {
    public String contentType;
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsImportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsImportResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsImportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}