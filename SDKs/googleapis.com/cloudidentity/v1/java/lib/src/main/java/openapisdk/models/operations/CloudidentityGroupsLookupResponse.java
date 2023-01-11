package openapisdk.models.operations;



public class CloudidentityGroupsLookupResponse {
    public String contentType;
    public CloudidentityGroupsLookupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LookupGroupNameResponse lookupGroupNameResponse;
    public CloudidentityGroupsLookupResponse withLookupGroupNameResponse(openapisdk.models.shared.LookupGroupNameResponse lookupGroupNameResponse) {
        this.lookupGroupNameResponse = lookupGroupNameResponse;
        return this;
    }
    public Long statusCode;
    public CloudidentityGroupsLookupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}