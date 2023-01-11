package openapisdk.models.operations;



public class PatchUserTagsTagIdResponse {
    public String contentType;
    public PatchUserTagsTagIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchUserTagsTagIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Tag tag;
    public PatchUserTagsTagIdResponse withTag(openapisdk.models.shared.Tag tag) {
        this.tag = tag;
        return this;
    }
}