package openapisdk.models.operations;



public class FareEstimateGetFareEstimateByZoneResponse {
    public byte[] body;
    public FareEstimateGetFareEstimateByZoneResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public FareEstimateGetFareEstimateByZoneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FareEstimateGetFareEstimateByZoneResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.V3ErrorResponse v3ErrorResponse;
    public FareEstimateGetFareEstimateByZoneResponse withV3ErrorResponse(openapisdk.models.shared.V3ErrorResponse v3ErrorResponse) {
        this.v3ErrorResponse = v3ErrorResponse;
        return this;
    }
    public Object v3FareEstimateResponse;
    public FareEstimateGetFareEstimateByZoneResponse withV3FareEstimateResponse(Object v3FareEstimateResponse) {
        this.v3FareEstimateResponse = v3FareEstimateResponse;
        return this;
    }
}