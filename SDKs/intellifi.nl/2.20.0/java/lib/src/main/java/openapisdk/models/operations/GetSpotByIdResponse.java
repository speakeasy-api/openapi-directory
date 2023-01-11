package openapisdk.models.operations;



public class GetSpotByIdResponse {
    public String contentType;
    public GetSpotByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SpotGet spotGet;
    public GetSpotByIdResponse withSpotGet(openapisdk.models.shared.SpotGet spotGet) {
        this.spotGet = spotGet;
        return this;
    }
    public Long statusCode;
    public GetSpotByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}