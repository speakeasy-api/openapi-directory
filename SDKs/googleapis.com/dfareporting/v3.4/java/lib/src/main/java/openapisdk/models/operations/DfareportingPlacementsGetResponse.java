package openapisdk.models.operations;



public class DfareportingPlacementsGetResponse {
    public String contentType;
    public DfareportingPlacementsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Placement placement;
    public DfareportingPlacementsGetResponse withPlacement(openapisdk.models.shared.Placement placement) {
        this.placement = placement;
        return this;
    }
    public Long statusCode;
    public DfareportingPlacementsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}