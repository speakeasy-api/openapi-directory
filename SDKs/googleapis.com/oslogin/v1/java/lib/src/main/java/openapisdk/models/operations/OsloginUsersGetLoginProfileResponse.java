package openapisdk.models.operations;



public class OsloginUsersGetLoginProfileResponse {
    public String contentType;
    public OsloginUsersGetLoginProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LoginProfile loginProfile;
    public OsloginUsersGetLoginProfileResponse withLoginProfile(openapisdk.models.shared.LoginProfile loginProfile) {
        this.loginProfile = loginProfile;
        return this;
    }
    public Long statusCode;
    public OsloginUsersGetLoginProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}