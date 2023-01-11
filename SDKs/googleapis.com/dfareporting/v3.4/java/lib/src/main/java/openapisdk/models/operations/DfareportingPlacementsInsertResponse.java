package openapisdk.models.operations;



public class DfareportingPlacementsInsertResponse {
    public String contentType;
    public DfareportingPlacementsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Placement placement;
    public DfareportingPlacementsInsertResponse withPlacement(openapisdk.models.shared.Placement placement) {
        this.placement = placement;
        return this;
    }
    public Long statusCode;
    public DfareportingPlacementsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}