package openapisdk.models.operations;



public class GetDocumentWithPathResponse {
    public openapisdk.models.shared.FourHundred fourHundred;
    public GetDocumentWithPathResponse withFourHundred(openapisdk.models.shared.FourHundred fourHundred) {
        this.fourHundred = fourHundred;
        return this;
    }
    public String contentType;
    public GetDocumentWithPathResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDocumentWithPathResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDocumentWithPath200ApplicationJson getDocumentWithPath200ApplicationJSONObject;
    public GetDocumentWithPathResponse withGetDocumentWithPath200ApplicationJsonObject(GetDocumentWithPath200ApplicationJson getDocumentWithPath200ApplicationJSONObject) {
        this.getDocumentWithPath200ApplicationJSONObject = getDocumentWithPath200ApplicationJSONObject;
        return this;
    }
}