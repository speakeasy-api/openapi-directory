package openapisdk.models.operations;



public class CloudidentityGroupsMembershipsSearchTransitiveMembershipsResponse {
    public String contentType;
    public CloudidentityGroupsMembershipsSearchTransitiveMembershipsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchTransitiveMembershipsResponse searchTransitiveMembershipsResponse;
    public CloudidentityGroupsMembershipsSearchTransitiveMembershipsResponse withSearchTransitiveMembershipsResponse(openapisdk.models.shared.SearchTransitiveMembershipsResponse searchTransitiveMembershipsResponse) {
        this.searchTransitiveMembershipsResponse = searchTransitiveMembershipsResponse;
        return this;
    }
    public Long statusCode;
    public CloudidentityGroupsMembershipsSearchTransitiveMembershipsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}