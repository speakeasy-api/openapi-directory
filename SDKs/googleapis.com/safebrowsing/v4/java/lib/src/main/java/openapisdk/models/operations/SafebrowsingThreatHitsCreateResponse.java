package openapisdk.models.operations;



public class SafebrowsingThreatHitsCreateResponse {
    public String contentType;
    public SafebrowsingThreatHitsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> googleProtobufEmpty;
    public SafebrowsingThreatHitsCreateResponse withGoogleProtobufEmpty(java.util.Map<String, Object> googleProtobufEmpty) {
        this.googleProtobufEmpty = googleProtobufEmpty;
        return this;
    }
    public Long statusCode;
    public SafebrowsingThreatHitsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}