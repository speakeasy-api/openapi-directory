package openapisdk.models.operations;



public class DcimRacksReadResponse {
    public String contentType;
    public DcimRacksReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Rack rack;
    public DcimRacksReadResponse withRack(openapisdk.models.shared.Rack rack) {
        this.rack = rack;
        return this;
    }
    public Long statusCode;
    public DcimRacksReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}