package openapisdk.models.operations;



public class ListTagsResponse {
    public String contentType;
    public ListTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TagsCollection tagsCollection;
    public ListTagsResponse withTagsCollection(openapisdk.models.shared.TagsCollection tagsCollection) {
        this.tagsCollection = tagsCollection;
        return this;
    }
}