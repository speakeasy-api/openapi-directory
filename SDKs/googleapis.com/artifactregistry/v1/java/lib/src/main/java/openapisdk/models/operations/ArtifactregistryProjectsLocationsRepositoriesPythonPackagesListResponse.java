package openapisdk.models.operations;



public class ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListResponse {
    public String contentType;
    public ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListPythonPackagesResponse listPythonPackagesResponse;
    public ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListResponse withListPythonPackagesResponse(openapisdk.models.shared.ListPythonPackagesResponse listPythonPackagesResponse) {
        this.listPythonPackagesResponse = listPythonPackagesResponse;
        return this;
    }
    public Long statusCode;
    public ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}