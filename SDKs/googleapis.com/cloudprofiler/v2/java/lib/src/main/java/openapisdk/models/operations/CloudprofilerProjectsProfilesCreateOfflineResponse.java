package openapisdk.models.operations;



public class CloudprofilerProjectsProfilesCreateOfflineResponse {
    public String contentType;
    public CloudprofilerProjectsProfilesCreateOfflineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Profile profile;
    public CloudprofilerProjectsProfilesCreateOfflineResponse withProfile(openapisdk.models.shared.Profile profile) {
        this.profile = profile;
        return this;
    }
    public Long statusCode;
    public CloudprofilerProjectsProfilesCreateOfflineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}