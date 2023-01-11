package openapisdk.models.operations;



public class DfareportingPlacementsListResponse {
    public String contentType;
    public DfareportingPlacementsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlacementsListResponse placementsListResponse;
    public DfareportingPlacementsListResponse withPlacementsListResponse(openapisdk.models.shared.PlacementsListResponse placementsListResponse) {
        this.placementsListResponse = placementsListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingPlacementsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}