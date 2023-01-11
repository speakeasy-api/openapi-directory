package openapisdk.models.operations;



public class DcimRacksUnitsResponse {
    public String contentType;
    public DcimRacksUnitsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Rack rack;
    public DcimRacksUnitsResponse withRack(openapisdk.models.shared.Rack rack) {
        this.rack = rack;
        return this;
    }
    public Long statusCode;
    public DcimRacksUnitsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}