package openapisdk.models.operations;



public class ExtrasTagsPartialUpdateResponse {
    public String contentType;
    public ExtrasTagsPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExtrasTagsPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Tag tag;
    public ExtrasTagsPartialUpdateResponse withTag(openapisdk.models.shared.Tag tag) {
        this.tag = tag;
        return this;
    }
}