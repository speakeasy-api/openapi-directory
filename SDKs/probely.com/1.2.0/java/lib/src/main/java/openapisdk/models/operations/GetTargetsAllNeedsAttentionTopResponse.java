package openapisdk.models.operations;



public class GetTargetsAllNeedsAttentionTopResponse {
    public String contentType;
    public GetTargetsAllNeedsAttentionTopResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTargetsAllNeedsAttentionTopResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTargetsAllNeedsAttentionTop200ApplicationJson[] getTargetsAllNeedsAttentionTop200ApplicationJSONObjects;
    public GetTargetsAllNeedsAttentionTopResponse withGetTargetsAllNeedsAttentionTop200ApplicationJsonObjects(GetTargetsAllNeedsAttentionTop200ApplicationJson[] getTargetsAllNeedsAttentionTop200ApplicationJSONObjects) {
        this.getTargetsAllNeedsAttentionTop200ApplicationJSONObjects = getTargetsAllNeedsAttentionTop200ApplicationJSONObjects;
        return this;
    }
}