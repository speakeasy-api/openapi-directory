package openapisdk.models.operations;



public class GetLabelsResponse {
    public String contentType;
    public GetLabelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLabelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetLabels200ApplicationJson getLabels200ApplicationJSONObject;
    public GetLabelsResponse withGetLabels200ApplicationJsonObject(GetLabels200ApplicationJson getLabels200ApplicationJSONObject) {
        this.getLabels200ApplicationJSONObject = getLabels200ApplicationJSONObject;
        return this;
    }
    public GetLabels401ApplicationJson getLabels401ApplicationJSONObject;
    public GetLabelsResponse withGetLabels401ApplicationJsonObject(GetLabels401ApplicationJson getLabels401ApplicationJSONObject) {
        this.getLabels401ApplicationJSONObject = getLabels401ApplicationJSONObject;
        return this;
    }
}