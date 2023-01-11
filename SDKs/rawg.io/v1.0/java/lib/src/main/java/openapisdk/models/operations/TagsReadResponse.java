package openapisdk.models.operations;



public class TagsReadResponse {
    public String contentType;
    public TagsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TagsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TagSingle tagSingle;
    public TagsReadResponse withTagSingle(openapisdk.models.shared.TagSingle tagSingle) {
        this.tagSingle = tagSingle;
        return this;
    }
}