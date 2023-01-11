package openapisdk.models.operations;



public class GetOrgResponse {
    public String contentType;
    public GetOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOrgResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OrgResponse orgResponse;
    public GetOrgResponse withOrgResponse(openapisdk.models.shared.OrgResponse orgResponse) {
        this.orgResponse = orgResponse;
        return this;
    }
    public Long statusCode;
    public GetOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}