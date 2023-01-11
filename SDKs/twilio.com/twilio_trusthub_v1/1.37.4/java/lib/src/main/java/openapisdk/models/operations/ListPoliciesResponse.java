package openapisdk.models.operations;



public class ListPoliciesResponse {
    public String contentType;
    public ListPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListPoliciesListPoliciesResponse listPoliciesResponse;
    public ListPoliciesResponse withListPoliciesResponse(ListPoliciesListPoliciesResponse listPoliciesResponse) {
        this.listPoliciesResponse = listPoliciesResponse;
        return this;
    }
    public Long statusCode;
    public ListPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}