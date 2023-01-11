package openapisdk.models.operations;



public class DatafusionProjectsLocationsInstancesDnsPeeringsListResponse {
    public String contentType;
    public DatafusionProjectsLocationsInstancesDnsPeeringsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDnsPeeringsResponse listDnsPeeringsResponse;
    public DatafusionProjectsLocationsInstancesDnsPeeringsListResponse withListDnsPeeringsResponse(openapisdk.models.shared.ListDnsPeeringsResponse listDnsPeeringsResponse) {
        this.listDnsPeeringsResponse = listDnsPeeringsResponse;
        return this;
    }
    public Long statusCode;
    public DatafusionProjectsLocationsInstancesDnsPeeringsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}