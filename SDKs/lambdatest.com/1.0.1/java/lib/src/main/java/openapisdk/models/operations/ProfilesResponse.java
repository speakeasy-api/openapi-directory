package openapisdk.models.operations;



public class ProfilesResponse {
    public Object accessDenied;
    public ProfilesResponse withAccessDenied(Object accessDenied) {
        this.accessDenied = accessDenied;
        return this;
    }
    public String contentType;
    public ProfilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProfilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Profiles profiles;
    public ProfilesResponse withProfiles(openapisdk.models.shared.Profiles profiles) {
        this.profiles = profiles;
        return this;
    }
}