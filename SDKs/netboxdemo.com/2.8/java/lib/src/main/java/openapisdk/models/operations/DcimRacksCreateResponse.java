package openapisdk.models.operations;



public class DcimRacksCreateResponse {
    public String contentType;
    public DcimRacksCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Rack rack;
    public DcimRacksCreateResponse withRack(openapisdk.models.shared.Rack rack) {
        this.rack = rack;
        return this;
    }
    public Long statusCode;
    public DcimRacksCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}