package openapisdk.models.operations;



public class GetSentencesFromBookResponse {
    public String contentType;
    public GetSentencesFromBookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSentencesFromBookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSentencesFromBook200ApplicationJson getSentencesFromBook200ApplicationJSONObject;
    public GetSentencesFromBookResponse withGetSentencesFromBook200ApplicationJsonObject(GetSentencesFromBook200ApplicationJson getSentencesFromBook200ApplicationJSONObject) {
        this.getSentencesFromBook200ApplicationJSONObject = getSentencesFromBook200ApplicationJSONObject;
        return this;
    }
}