package openapisdk.models.operations;



public class GetApiV2PredictionsResponse {
    public String contentType;
    public GetApiV2PredictionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetApiV2PredictionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetApiV2Predictions404ApplicationJson getApiV2Predictions404ApplicationJSONObject;
    public GetApiV2PredictionsResponse withGetApiV2Predictions404ApplicationJsonObject(GetApiV2Predictions404ApplicationJson getApiV2Predictions404ApplicationJSONObject) {
        this.getApiV2Predictions404ApplicationJSONObject = getApiV2Predictions404ApplicationJSONObject;
        return this;
    }
}