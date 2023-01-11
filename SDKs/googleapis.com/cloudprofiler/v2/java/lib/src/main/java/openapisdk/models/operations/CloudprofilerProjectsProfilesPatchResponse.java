package openapisdk.models.operations;



public class CloudprofilerProjectsProfilesPatchResponse {
    public String contentType;
    public CloudprofilerProjectsProfilesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Profile profile;
    public CloudprofilerProjectsProfilesPatchResponse withProfile(openapisdk.models.shared.Profile profile) {
        this.profile = profile;
        return this;
    }
    public Long statusCode;
    public CloudprofilerProjectsProfilesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}