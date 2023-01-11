package openapisdk.models.operations;



public class DcimRacksElevationResponse {
    public String contentType;
    public DcimRacksElevationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RackUnit[] rackUnits;
    public DcimRacksElevationResponse withRackUnits(openapisdk.models.shared.RackUnit[] rackUnits) {
        this.rackUnits = rackUnits;
        return this;
    }
    public Long statusCode;
    public DcimRacksElevationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}