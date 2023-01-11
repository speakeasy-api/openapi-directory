package openapisdk.models.operations;



public class GetUsersUserIdWebProfilesResponse {
    public String contentType;
    public GetUsersUserIdWebProfilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetUsersUserIdWebProfilesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetUsersUserIdWebProfilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WebProfiles[] webProfiles;
    public GetUsersUserIdWebProfilesResponse withWebProfiles(openapisdk.models.shared.WebProfiles[] webProfiles) {
        this.webProfiles = webProfiles;
        return this;
    }
}