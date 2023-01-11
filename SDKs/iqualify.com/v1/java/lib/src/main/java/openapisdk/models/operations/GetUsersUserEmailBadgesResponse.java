package openapisdk.models.operations;



public class GetUsersUserEmailBadgesResponse {
    public String contentType;
    public GetUsersUserEmailBadgesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetUsersUserEmailBadgesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetUsersUserEmailBadgesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserBadge[] userBadges;
    public GetUsersUserEmailBadgesResponse withUserBadges(openapisdk.models.shared.UserBadge[] userBadges) {
        this.userBadges = userBadges;
        return this;
    }
}