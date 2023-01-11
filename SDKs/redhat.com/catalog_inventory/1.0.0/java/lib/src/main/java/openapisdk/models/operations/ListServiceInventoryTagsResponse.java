package openapisdk.models.operations;



public class ListServiceInventoryTagsResponse {
    public String contentType;
    public ListServiceInventoryTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorNotFound errorNotFound;
    public ListServiceInventoryTagsResponse withErrorNotFound(openapisdk.models.shared.ErrorNotFound errorNotFound) {
        this.errorNotFound = errorNotFound;
        return this;
    }
    public Long statusCode;
    public ListServiceInventoryTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TagsCollection tagsCollection;
    public ListServiceInventoryTagsResponse withTagsCollection(openapisdk.models.shared.TagsCollection tagsCollection) {
        this.tagsCollection = tagsCollection;
        return this;
    }
}