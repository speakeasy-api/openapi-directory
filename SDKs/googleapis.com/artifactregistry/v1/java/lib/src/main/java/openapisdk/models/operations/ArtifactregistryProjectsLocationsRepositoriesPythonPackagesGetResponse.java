package openapisdk.models.operations;



public class ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetResponse {
    public String contentType;
    public ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PythonPackage pythonPackage;
    public ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetResponse withPythonPackage(openapisdk.models.shared.PythonPackage pythonPackage) {
        this.pythonPackage = pythonPackage;
        return this;
    }
    public Long statusCode;
    public ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}