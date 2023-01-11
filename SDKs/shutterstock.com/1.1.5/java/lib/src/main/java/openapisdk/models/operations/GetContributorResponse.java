package openapisdk.models.operations;



public class GetContributorResponse {
    public String contentType;
    public GetContributorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ContributorProfile contributorProfile;
    public GetContributorResponse withContributorProfile(openapisdk.models.shared.ContributorProfile contributorProfile) {
        this.contributorProfile = contributorProfile;
        return this;
    }
    public Long statusCode;
    public GetContributorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}