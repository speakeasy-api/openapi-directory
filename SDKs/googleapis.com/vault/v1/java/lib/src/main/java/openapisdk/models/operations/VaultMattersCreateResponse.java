package openapisdk.models.operations;



public class VaultMattersCreateResponse {
    public String contentType;
    public VaultMattersCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Matter matter;
    public VaultMattersCreateResponse withMatter(openapisdk.models.shared.Matter matter) {
        this.matter = matter;
        return this;
    }
    public Long statusCode;
    public VaultMattersCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}