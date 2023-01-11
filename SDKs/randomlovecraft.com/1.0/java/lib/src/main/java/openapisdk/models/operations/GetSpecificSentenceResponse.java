package openapisdk.models.operations;



public class GetSpecificSentenceResponse {
    public String contentType;
    public GetSpecificSentenceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSpecificSentenceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSpecificSentence200ApplicationJson getSpecificSentence200ApplicationJSONObject;
    public GetSpecificSentenceResponse withGetSpecificSentence200ApplicationJsonObject(GetSpecificSentence200ApplicationJson getSpecificSentence200ApplicationJSONObject) {
        this.getSpecificSentence200ApplicationJSONObject = getSpecificSentence200ApplicationJSONObject;
        return this;
    }
}