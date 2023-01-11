package openapisdk.models.operations;



public class OutletsGetOutletsByGeolocationResponse {
    public byte[] body;
    public OutletsGetOutletsByGeolocationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public OutletsGetOutletsByGeolocationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OutletsGetOutletsByGeolocationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.V3ErrorResponse v3ErrorResponse;
    public OutletsGetOutletsByGeolocationResponse withV3ErrorResponse(openapisdk.models.shared.V3ErrorResponse v3ErrorResponse) {
        this.v3ErrorResponse = v3ErrorResponse;
        return this;
    }
    public openapisdk.models.shared.V3OutletGeolocationResponse v3OutletGeolocationResponse;
    public OutletsGetOutletsByGeolocationResponse withV3OutletGeolocationResponse(openapisdk.models.shared.V3OutletGeolocationResponse v3OutletGeolocationResponse) {
        this.v3OutletGeolocationResponse = v3OutletGeolocationResponse;
        return this;
    }
}