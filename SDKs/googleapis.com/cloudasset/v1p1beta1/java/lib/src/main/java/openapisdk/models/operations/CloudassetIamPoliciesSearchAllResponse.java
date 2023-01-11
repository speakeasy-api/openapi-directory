package openapisdk.models.operations;



public class CloudassetIamPoliciesSearchAllResponse {
    public String contentType;
    public CloudassetIamPoliciesSearchAllResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchAllIamPoliciesResponse searchAllIamPoliciesResponse;
    public CloudassetIamPoliciesSearchAllResponse withSearchAllIamPoliciesResponse(openapisdk.models.shared.SearchAllIamPoliciesResponse searchAllIamPoliciesResponse) {
        this.searchAllIamPoliciesResponse = searchAllIamPoliciesResponse;
        return this;
    }
    public Long statusCode;
    public CloudassetIamPoliciesSearchAllResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}