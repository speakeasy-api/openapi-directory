package openapisdk.models.operations;



public class PostQueryResponse {
    public openapisdk.models.shared.FourHundred fourHundred;
    public PostQueryResponse withFourHundred(openapisdk.models.shared.FourHundred fourHundred) {
        this.fourHundred = fourHundred;
        return this;
    }
    public String contentType;
    public PostQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostQuery200ApplicationJson postQuery200ApplicationJSONObject;
    public PostQueryResponse withPostQuery200ApplicationJsonObject(PostQuery200ApplicationJson postQuery200ApplicationJSONObject) {
        this.postQuery200ApplicationJSONObject = postQuery200ApplicationJSONObject;
        return this;
    }
}