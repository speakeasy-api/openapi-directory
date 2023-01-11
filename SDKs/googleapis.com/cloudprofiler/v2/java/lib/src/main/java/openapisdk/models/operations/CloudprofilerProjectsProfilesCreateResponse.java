package openapisdk.models.operations;



public class CloudprofilerProjectsProfilesCreateResponse {
    public String contentType;
    public CloudprofilerProjectsProfilesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Profile profile;
    public CloudprofilerProjectsProfilesCreateResponse withProfile(openapisdk.models.shared.Profile profile) {
        this.profile = profile;
        return this;
    }
    public Long statusCode;
    public CloudprofilerProjectsProfilesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}