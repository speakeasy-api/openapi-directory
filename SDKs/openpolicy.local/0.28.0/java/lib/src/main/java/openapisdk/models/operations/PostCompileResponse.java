package openapisdk.models.operations;



public class PostCompileResponse {
    public openapisdk.models.shared.FourHundred fourHundred;
    public PostCompileResponse withFourHundred(openapisdk.models.shared.FourHundred fourHundred) {
        this.fourHundred = fourHundred;
        return this;
    }
    public String contentType;
    public PostCompileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCompileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostCompile200ApplicationJson postCompile200ApplicationJSONObject;
    public PostCompileResponse withPostCompile200ApplicationJsonObject(PostCompile200ApplicationJson postCompile200ApplicationJSONObject) {
        this.postCompile200ApplicationJSONObject = postCompile200ApplicationJSONObject;
        return this;
    }
}