package openapisdk.models.operations;



public class ListConnectionPolicyResponse {
    public String contentType;
    public ListConnectionPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListConnectionPolicyListConnectionPolicyResponse listConnectionPolicyResponse;
    public ListConnectionPolicyResponse withListConnectionPolicyResponse(ListConnectionPolicyListConnectionPolicyResponse listConnectionPolicyResponse) {
        this.listConnectionPolicyResponse = listConnectionPolicyResponse;
        return this;
    }
    public Long statusCode;
    public ListConnectionPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}