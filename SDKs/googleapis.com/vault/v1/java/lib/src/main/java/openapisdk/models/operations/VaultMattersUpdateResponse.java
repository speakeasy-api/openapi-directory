package openapisdk.models.operations;



public class VaultMattersUpdateResponse {
    public String contentType;
    public VaultMattersUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Matter matter;
    public VaultMattersUpdateResponse withMatter(openapisdk.models.shared.Matter matter) {
        this.matter = matter;
        return this;
    }
    public Long statusCode;
    public VaultMattersUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}