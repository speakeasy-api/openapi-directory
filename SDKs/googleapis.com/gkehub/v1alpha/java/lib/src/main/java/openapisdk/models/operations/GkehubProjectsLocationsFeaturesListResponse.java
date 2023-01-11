package openapisdk.models.operations;



public class GkehubProjectsLocationsFeaturesListResponse {
    public String contentType;
    public GkehubProjectsLocationsFeaturesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListFeaturesResponse listFeaturesResponse;
    public GkehubProjectsLocationsFeaturesListResponse withListFeaturesResponse(openapisdk.models.shared.ListFeaturesResponse listFeaturesResponse) {
        this.listFeaturesResponse = listFeaturesResponse;
        return this;
    }
    public Long statusCode;
    public GkehubProjectsLocationsFeaturesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}