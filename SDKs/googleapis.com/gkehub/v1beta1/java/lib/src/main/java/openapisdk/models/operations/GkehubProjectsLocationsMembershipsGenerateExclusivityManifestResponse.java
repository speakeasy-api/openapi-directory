package openapisdk.models.operations;



public class GkehubProjectsLocationsMembershipsGenerateExclusivityManifestResponse {
    public String contentType;
    public GkehubProjectsLocationsMembershipsGenerateExclusivityManifestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GenerateExclusivityManifestResponse generateExclusivityManifestResponse;
    public GkehubProjectsLocationsMembershipsGenerateExclusivityManifestResponse withGenerateExclusivityManifestResponse(openapisdk.models.shared.GenerateExclusivityManifestResponse generateExclusivityManifestResponse) {
        this.generateExclusivityManifestResponse = generateExclusivityManifestResponse;
        return this;
    }
    public Long statusCode;
    public GkehubProjectsLocationsMembershipsGenerateExclusivityManifestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}