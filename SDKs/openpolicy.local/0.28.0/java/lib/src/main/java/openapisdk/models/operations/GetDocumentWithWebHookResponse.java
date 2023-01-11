package openapisdk.models.operations;



public class GetDocumentWithWebHookResponse {
    public openapisdk.models.shared.FourHundred fourHundred;
    public GetDocumentWithWebHookResponse withFourHundred(openapisdk.models.shared.FourHundred fourHundred) {
        this.fourHundred = fourHundred;
        return this;
    }
    public openapisdk.models.shared.FourHundredAndFour fourHundredAndFour;
    public GetDocumentWithWebHookResponse withFourHundredAndFour(openapisdk.models.shared.FourHundredAndFour fourHundredAndFour) {
        this.fourHundredAndFour = fourHundredAndFour;
        return this;
    }
    public String contentType;
    public GetDocumentWithWebHookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDocumentWithWebHookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDocumentWithWebHook200ApplicationJson getDocumentWithWebHook200ApplicationJSONObject;
    public GetDocumentWithWebHookResponse withGetDocumentWithWebHook200ApplicationJsonObject(GetDocumentWithWebHook200ApplicationJson getDocumentWithWebHook200ApplicationJSONObject) {
        this.getDocumentWithWebHook200ApplicationJSONObject = getDocumentWithWebHook200ApplicationJSONObject;
        return this;
    }
}