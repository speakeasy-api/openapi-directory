package openapisdk.models.operations;



public class GetSentencesResponse {
    public String contentType;
    public GetSentencesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSentencesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSentences200ApplicationJson getSentences200ApplicationJSONObject;
    public GetSentencesResponse withGetSentences200ApplicationJsonObject(GetSentences200ApplicationJson getSentences200ApplicationJSONObject) {
        this.getSentences200ApplicationJSONObject = getSentences200ApplicationJSONObject;
        return this;
    }
}