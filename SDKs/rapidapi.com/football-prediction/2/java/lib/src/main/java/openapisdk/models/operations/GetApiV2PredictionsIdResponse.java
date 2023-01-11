package openapisdk.models.operations;



public class GetApiV2PredictionsIdResponse {
    public String contentType;
    public GetApiV2PredictionsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetApiV2PredictionsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetApiV2PredictionsId200ApplicationJson getApiV2PredictionsId200ApplicationJSONObject;
    public GetApiV2PredictionsIdResponse withGetApiV2PredictionsId200ApplicationJsonObject(GetApiV2PredictionsId200ApplicationJson getApiV2PredictionsId200ApplicationJSONObject) {
        this.getApiV2PredictionsId200ApplicationJSONObject = getApiV2PredictionsId200ApplicationJSONObject;
        return this;
    }
    public GetApiV2PredictionsId404ApplicationJson getApiV2PredictionsId404ApplicationJSONObject;
    public GetApiV2PredictionsIdResponse withGetApiV2PredictionsId404ApplicationJsonObject(GetApiV2PredictionsId404ApplicationJson getApiV2PredictionsId404ApplicationJSONObject) {
        this.getApiV2PredictionsId404ApplicationJSONObject = getApiV2PredictionsId404ApplicationJSONObject;
        return this;
    }
}