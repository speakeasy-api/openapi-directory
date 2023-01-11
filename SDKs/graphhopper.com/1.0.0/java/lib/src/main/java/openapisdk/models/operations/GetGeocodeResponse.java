package openapisdk.models.operations;



public class GetGeocodeResponse {
    public String contentType;
    public GetGeocodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GhError ghError;
    public GetGeocodeResponse withGhError(openapisdk.models.shared.GhError ghError) {
        this.ghError = ghError;
        return this;
    }
    public Object geocodingResponse;
    public GetGeocodeResponse withGeocodingResponse(Object geocodingResponse) {
        this.geocodingResponse = geocodingResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetGeocodeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetGeocodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}