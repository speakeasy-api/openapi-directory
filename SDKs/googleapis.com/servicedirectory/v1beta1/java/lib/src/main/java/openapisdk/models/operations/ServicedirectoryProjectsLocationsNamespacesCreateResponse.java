package openapisdk.models.operations;



public class ServicedirectoryProjectsLocationsNamespacesCreateResponse {
    public String contentType;
    public ServicedirectoryProjectsLocationsNamespacesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Namespace namespace;
    public ServicedirectoryProjectsLocationsNamespacesCreateResponse withNamespace(openapisdk.models.shared.Namespace namespace) {
        this.namespace = namespace;
        return this;
    }
    public Long statusCode;
    public ServicedirectoryProjectsLocationsNamespacesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}