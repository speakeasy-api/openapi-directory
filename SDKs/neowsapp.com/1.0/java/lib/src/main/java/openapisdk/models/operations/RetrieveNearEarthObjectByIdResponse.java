package openapisdk.models.operations;



public class RetrieveNearEarthObjectByIdResponse {
    public String contentType;
    public RetrieveNearEarthObjectByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NearEarthObject nearEarthObject;
    public RetrieveNearEarthObjectByIdResponse withNearEarthObject(openapisdk.models.shared.NearEarthObject nearEarthObject) {
        this.nearEarthObject = nearEarthObject;
        return this;
    }
    public Long statusCode;
    public RetrieveNearEarthObjectByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}