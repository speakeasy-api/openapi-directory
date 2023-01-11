package openapisdk.models.operations;



public class GetDocumentResponse {
    public openapisdk.models.shared.FourHundred fourHundred;
    public GetDocumentResponse withFourHundred(openapisdk.models.shared.FourHundred fourHundred) {
        this.fourHundred = fourHundred;
        return this;
    }
    public String contentType;
    public GetDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDocument200ApplicationJson getDocument200ApplicationJSONObject;
    public GetDocumentResponse withGetDocument200ApplicationJsonObject(GetDocument200ApplicationJson getDocument200ApplicationJSONObject) {
        this.getDocument200ApplicationJSONObject = getDocument200ApplicationJSONObject;
        return this;
    }
}