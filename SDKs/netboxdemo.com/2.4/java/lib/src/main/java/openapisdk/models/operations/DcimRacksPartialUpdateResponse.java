package openapisdk.models.operations;



public class DcimRacksPartialUpdateResponse {
    public String contentType;
    public DcimRacksPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Rack rack;
    public DcimRacksPartialUpdateResponse withRack(openapisdk.models.shared.Rack rack) {
        this.rack = rack;
        return this;
    }
    public Long statusCode;
    public DcimRacksPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}