package openapisdk.models.operations;



public class GetTargetsTargetIdAssetsIdResponse {
    public openapisdk.models.shared.Asset asset;
    public GetTargetsTargetIdAssetsIdResponse withAsset(openapisdk.models.shared.Asset asset) {
        this.asset = asset;
        return this;
    }
    public String contentType;
    public GetTargetsTargetIdAssetsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTargetsTargetIdAssetsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTargetsTargetIdAssetsId400ApplicationJson getTargetsTargetIdAssetsId400ApplicationJSONObject;
    public GetTargetsTargetIdAssetsIdResponse withGetTargetsTargetIdAssetsId400ApplicationJsonObject(GetTargetsTargetIdAssetsId400ApplicationJson getTargetsTargetIdAssetsId400ApplicationJSONObject) {
        this.getTargetsTargetIdAssetsId400ApplicationJSONObject = getTargetsTargetIdAssetsId400ApplicationJSONObject;
        return this;
    }
    public GetTargetsTargetIdAssetsId401ApplicationJson getTargetsTargetIdAssetsId401ApplicationJSONObject;
    public GetTargetsTargetIdAssetsIdResponse withGetTargetsTargetIdAssetsId401ApplicationJsonObject(GetTargetsTargetIdAssetsId401ApplicationJson getTargetsTargetIdAssetsId401ApplicationJSONObject) {
        this.getTargetsTargetIdAssetsId401ApplicationJSONObject = getTargetsTargetIdAssetsId401ApplicationJSONObject;
        return this;
    }
    public GetTargetsTargetIdAssetsId404ApplicationJson getTargetsTargetIdAssetsId404ApplicationJSONObject;
    public GetTargetsTargetIdAssetsIdResponse withGetTargetsTargetIdAssetsId404ApplicationJsonObject(GetTargetsTargetIdAssetsId404ApplicationJson getTargetsTargetIdAssetsId404ApplicationJSONObject) {
        this.getTargetsTargetIdAssetsId404ApplicationJSONObject = getTargetsTargetIdAssetsId404ApplicationJSONObject;
        return this;
    }
}