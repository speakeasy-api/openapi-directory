package openapisdk.models.operations;



public class PutUserTagsTagIdShowsShowIdResponse {
    public String contentType;
    public PutUserTagsTagIdShowsShowIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutUserTagsTagIdShowsShowIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TagInstance tagInstance;
    public PutUserTagsTagIdShowsShowIdResponse withTagInstance(openapisdk.models.shared.TagInstance tagInstance) {
        this.tagInstance = tagInstance;
        return this;
    }
}