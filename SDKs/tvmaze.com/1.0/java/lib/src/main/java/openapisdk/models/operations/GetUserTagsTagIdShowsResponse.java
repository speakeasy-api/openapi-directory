package openapisdk.models.operations;



public class GetUserTagsTagIdShowsResponse {
    public String contentType;
    public GetUserTagsTagIdShowsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserTagsTagIdShowsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TagInstance[] tagInstances;
    public GetUserTagsTagIdShowsResponse withTagInstances(openapisdk.models.shared.TagInstance[] tagInstances) {
        this.tagInstances = tagInstances;
        return this;
    }
}