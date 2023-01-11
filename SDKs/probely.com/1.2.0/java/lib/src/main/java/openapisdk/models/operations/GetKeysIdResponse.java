package openapisdk.models.operations;



public class GetKeysIdResponse {
    public openapisdk.models.shared.ApiKey apiKey;
    public GetKeysIdResponse withApiKey(openapisdk.models.shared.ApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    public String contentType;
    public GetKeysIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetKeysIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetKeysId401ApplicationJson getKeysId401ApplicationJSONObject;
    public GetKeysIdResponse withGetKeysId401ApplicationJsonObject(GetKeysId401ApplicationJson getKeysId401ApplicationJSONObject) {
        this.getKeysId401ApplicationJSONObject = getKeysId401ApplicationJSONObject;
        return this;
    }
    public GetKeysId403ApplicationJson getKeysId403ApplicationJSONObject;
    public GetKeysIdResponse withGetKeysId403ApplicationJsonObject(GetKeysId403ApplicationJson getKeysId403ApplicationJSONObject) {
        this.getKeysId403ApplicationJSONObject = getKeysId403ApplicationJSONObject;
        return this;
    }
}