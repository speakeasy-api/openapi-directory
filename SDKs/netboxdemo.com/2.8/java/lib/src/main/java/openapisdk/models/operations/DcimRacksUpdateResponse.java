package openapisdk.models.operations;



public class DcimRacksUpdateResponse {
    public String contentType;
    public DcimRacksUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Rack rack;
    public DcimRacksUpdateResponse withRack(openapisdk.models.shared.Rack rack) {
        this.rack = rack;
        return this;
    }
    public Long statusCode;
    public DcimRacksUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}