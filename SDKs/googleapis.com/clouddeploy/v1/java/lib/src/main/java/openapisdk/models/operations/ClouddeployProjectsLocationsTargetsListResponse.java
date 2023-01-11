package openapisdk.models.operations;



public class ClouddeployProjectsLocationsTargetsListResponse {
    public String contentType;
    public ClouddeployProjectsLocationsTargetsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTargetsResponse listTargetsResponse;
    public ClouddeployProjectsLocationsTargetsListResponse withListTargetsResponse(openapisdk.models.shared.ListTargetsResponse listTargetsResponse) {
        this.listTargetsResponse = listTargetsResponse;
        return this;
    }
    public Long statusCode;
    public ClouddeployProjectsLocationsTargetsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}