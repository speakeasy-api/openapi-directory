package openapisdk.models.operations;



public class VaultMattersUndeleteResponse {
    public String contentType;
    public VaultMattersUndeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Matter matter;
    public VaultMattersUndeleteResponse withMatter(openapisdk.models.shared.Matter matter) {
        this.matter = matter;
        return this;
    }
    public Long statusCode;
    public VaultMattersUndeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}