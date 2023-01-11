package openapisdk.models.operations;



public class DfareportingPlacementsUpdateResponse {
    public String contentType;
    public DfareportingPlacementsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Placement placement;
    public DfareportingPlacementsUpdateResponse withPlacement(openapisdk.models.shared.Placement placement) {
        this.placement = placement;
        return this;
    }
    public Long statusCode;
    public DfareportingPlacementsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}