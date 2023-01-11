package openapisdk.models.operations;



public class GetLabelsIdResponse {
    public String contentType;
    public GetLabelsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Label label;
    public GetLabelsIdResponse withLabel(openapisdk.models.shared.Label label) {
        this.label = label;
        return this;
    }
    public Long statusCode;
    public GetLabelsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetLabelsId401ApplicationJson getLabelsId401ApplicationJSONObject;
    public GetLabelsIdResponse withGetLabelsId401ApplicationJsonObject(GetLabelsId401ApplicationJson getLabelsId401ApplicationJSONObject) {
        this.getLabelsId401ApplicationJSONObject = getLabelsId401ApplicationJSONObject;
        return this;
    }
    public GetLabelsId404ApplicationJson getLabelsId404ApplicationJSONObject;
    public GetLabelsIdResponse withGetLabelsId404ApplicationJsonObject(GetLabelsId404ApplicationJson getLabelsId404ApplicationJSONObject) {
        this.getLabelsId404ApplicationJSONObject = getLabelsId404ApplicationJSONObject;
        return this;
    }
}