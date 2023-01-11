package openapisdk.models.operations;



public class GetContributorListResponse {
    public String contentType;
    public GetContributorListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object contributorProfileDataList;
    public GetContributorListResponse withContributorProfileDataList(Object contributorProfileDataList) {
        this.contributorProfileDataList = contributorProfileDataList;
        return this;
    }
    public Long statusCode;
    public GetContributorListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}