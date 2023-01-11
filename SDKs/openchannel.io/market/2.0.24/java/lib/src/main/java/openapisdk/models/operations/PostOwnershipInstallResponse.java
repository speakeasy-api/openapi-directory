package openapisdk.models.operations;



public class PostOwnershipInstallResponse {
    public byte[] body;
    public PostOwnershipInstallResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostOwnershipInstallResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostOwnershipInstallResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}