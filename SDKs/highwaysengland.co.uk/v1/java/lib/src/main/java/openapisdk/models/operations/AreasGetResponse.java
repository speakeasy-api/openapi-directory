package openapisdk.models.operations;



public class AreasGetResponse {
    public openapisdk.models.shared.AreaResponse areaResponse;
    public AreasGetResponse withAreaResponse(openapisdk.models.shared.AreaResponse areaResponse) {
        this.areaResponse = areaResponse;
        return this;
    }
    public String contentType;
    public AreasGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AreasGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}