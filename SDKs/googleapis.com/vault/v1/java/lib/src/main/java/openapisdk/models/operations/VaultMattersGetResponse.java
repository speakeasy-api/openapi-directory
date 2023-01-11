package openapisdk.models.operations;



public class VaultMattersGetResponse {
    public String contentType;
    public VaultMattersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Matter matter;
    public VaultMattersGetResponse withMatter(openapisdk.models.shared.Matter matter) {
        this.matter = matter;
        return this;
    }
    public Long statusCode;
    public VaultMattersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}