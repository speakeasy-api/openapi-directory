package openapisdk.models.operations;



public class GetTargetsTargetIdKeysIdResponse {
    public openapisdk.models.shared.ApiKey apiKey;
    public GetTargetsTargetIdKeysIdResponse withApiKey(openapisdk.models.shared.ApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    public String contentType;
    public GetTargetsTargetIdKeysIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTargetsTargetIdKeysIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTargetsTargetIdKeysId403ApplicationJson getTargetsTargetIdKeysId403ApplicationJSONObject;
    public GetTargetsTargetIdKeysIdResponse withGetTargetsTargetIdKeysId403ApplicationJsonObject(GetTargetsTargetIdKeysId403ApplicationJson getTargetsTargetIdKeysId403ApplicationJSONObject) {
        this.getTargetsTargetIdKeysId403ApplicationJSONObject = getTargetsTargetIdKeysId403ApplicationJSONObject;
        return this;
    }
    public GetTargetsTargetIdKeysId404ApplicationJson getTargetsTargetIdKeysId404ApplicationJSONObject;
    public GetTargetsTargetIdKeysIdResponse withGetTargetsTargetIdKeysId404ApplicationJsonObject(GetTargetsTargetIdKeysId404ApplicationJson getTargetsTargetIdKeysId404ApplicationJSONObject) {
        this.getTargetsTargetIdKeysId404ApplicationJSONObject = getTargetsTargetIdKeysId404ApplicationJSONObject;
        return this;
    }
}