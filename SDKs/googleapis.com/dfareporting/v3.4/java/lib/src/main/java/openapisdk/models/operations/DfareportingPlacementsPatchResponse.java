package openapisdk.models.operations;



public class DfareportingPlacementsPatchResponse {
    public String contentType;
    public DfareportingPlacementsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Placement placement;
    public DfareportingPlacementsPatchResponse withPlacement(openapisdk.models.shared.Placement placement) {
        this.placement = placement;
        return this;
    }
    public Long statusCode;
    public DfareportingPlacementsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}