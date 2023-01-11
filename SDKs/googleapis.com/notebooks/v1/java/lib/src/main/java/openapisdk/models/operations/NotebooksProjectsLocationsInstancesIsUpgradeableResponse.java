package openapisdk.models.operations;



public class NotebooksProjectsLocationsInstancesIsUpgradeableResponse {
    public String contentType;
    public NotebooksProjectsLocationsInstancesIsUpgradeableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IsInstanceUpgradeableResponse isInstanceUpgradeableResponse;
    public NotebooksProjectsLocationsInstancesIsUpgradeableResponse withIsInstanceUpgradeableResponse(openapisdk.models.shared.IsInstanceUpgradeableResponse isInstanceUpgradeableResponse) {
        this.isInstanceUpgradeableResponse = isInstanceUpgradeableResponse;
        return this;
    }
    public Long statusCode;
    public NotebooksProjectsLocationsInstancesIsUpgradeableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}