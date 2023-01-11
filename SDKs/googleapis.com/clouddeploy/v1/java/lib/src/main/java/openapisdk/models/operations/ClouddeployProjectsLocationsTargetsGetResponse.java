package openapisdk.models.operations;



public class ClouddeployProjectsLocationsTargetsGetResponse {
    public String contentType;
    public ClouddeployProjectsLocationsTargetsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClouddeployProjectsLocationsTargetsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Target target;
    public ClouddeployProjectsLocationsTargetsGetResponse withTarget(openapisdk.models.shared.Target target) {
        this.target = target;
        return this;
    }
}