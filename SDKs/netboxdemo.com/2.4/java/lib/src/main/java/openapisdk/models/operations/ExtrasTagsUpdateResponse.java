package openapisdk.models.operations;



public class ExtrasTagsUpdateResponse {
    public String contentType;
    public ExtrasTagsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExtrasTagsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Tag tag;
    public ExtrasTagsUpdateResponse withTag(openapisdk.models.shared.Tag tag) {
        this.tag = tag;
        return this;
    }
}