package openapisdk.models.operations;



public class ListConnectionPolicyTargetResponse {
    public String contentType;
    public ListConnectionPolicyTargetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListConnectionPolicyTargetListConnectionPolicyTargetResponse listConnectionPolicyTargetResponse;
    public ListConnectionPolicyTargetResponse withListConnectionPolicyTargetResponse(ListConnectionPolicyTargetListConnectionPolicyTargetResponse listConnectionPolicyTargetResponse) {
        this.listConnectionPolicyTargetResponse = listConnectionPolicyTargetResponse;
        return this;
    }
    public Long statusCode;
    public ListConnectionPolicyTargetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}