package openapisdk.models.operations;



public class GkehubProjectsLocationsMembershipsGenerateConnectManifestResponse {
    public String contentType;
    public GkehubProjectsLocationsMembershipsGenerateConnectManifestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GenerateConnectManifestResponse generateConnectManifestResponse;
    public GkehubProjectsLocationsMembershipsGenerateConnectManifestResponse withGenerateConnectManifestResponse(openapisdk.models.shared.GenerateConnectManifestResponse generateConnectManifestResponse) {
        this.generateConnectManifestResponse = generateConnectManifestResponse;
        return this;
    }
    public Long statusCode;
    public GkehubProjectsLocationsMembershipsGenerateConnectManifestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}