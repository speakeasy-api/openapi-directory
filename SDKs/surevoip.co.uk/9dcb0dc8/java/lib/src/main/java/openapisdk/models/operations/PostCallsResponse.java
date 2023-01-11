package openapisdk.models.operations;



public class PostCallsResponse {
    public String contentType;
    public PostCallsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostCallsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostCallsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostCalls202ApplicationJson postCalls202ApplicationJSONObject;
    public PostCallsResponse withPostCalls202ApplicationJsonObject(PostCalls202ApplicationJson postCalls202ApplicationJSONObject) {
        this.postCalls202ApplicationJSONObject = postCalls202ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.OneannouncementsPostResponses400ContentApplication1jsonSchema oneannouncementsPostResponses400ContentApplication1jsonSchema;
    public PostCallsResponse withOneannouncementsPostResponses400ContentApplication1jsonSchema(openapisdk.models.shared.OneannouncementsPostResponses400ContentApplication1jsonSchema oneannouncementsPostResponses400ContentApplication1jsonSchema) {
        this.oneannouncementsPostResponses400ContentApplication1jsonSchema = oneannouncementsPostResponses400ContentApplication1jsonSchema;
        return this;
    }
    public openapisdk.models.shared.OneannouncementsPostResponses403ContentApplication1jsonSchema oneannouncementsPostResponses403ContentApplication1jsonSchema;
    public PostCallsResponse withOneannouncementsPostResponses403ContentApplication1jsonSchema(openapisdk.models.shared.OneannouncementsPostResponses403ContentApplication1jsonSchema oneannouncementsPostResponses403ContentApplication1jsonSchema) {
        this.oneannouncementsPostResponses403ContentApplication1jsonSchema = oneannouncementsPostResponses403ContentApplication1jsonSchema;
        return this;
    }
}