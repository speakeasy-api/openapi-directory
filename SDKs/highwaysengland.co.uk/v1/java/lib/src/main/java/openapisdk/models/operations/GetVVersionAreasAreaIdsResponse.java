package openapisdk.models.operations;



public class GetVVersionAreasAreaIdsResponse {
    public openapisdk.models.shared.AreaResponse areaResponse;
    public GetVVersionAreasAreaIdsResponse withAreaResponse(openapisdk.models.shared.AreaResponse areaResponse) {
        this.areaResponse = areaResponse;
        return this;
    }
    public String contentType;
    public GetVVersionAreasAreaIdsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVVersionAreasAreaIdsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}