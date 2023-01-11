package openapisdk.models.operations;



public class VaultMattersDeleteResponse {
    public String contentType;
    public VaultMattersDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Matter matter;
    public VaultMattersDeleteResponse withMatter(openapisdk.models.shared.Matter matter) {
        this.matter = matter;
        return this;
    }
    public Long statusCode;
    public VaultMattersDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}