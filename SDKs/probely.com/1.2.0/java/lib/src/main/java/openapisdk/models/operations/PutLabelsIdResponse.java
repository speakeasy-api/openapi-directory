package openapisdk.models.operations;



public class PutLabelsIdResponse {
    public String contentType;
    public PutLabelsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Label label;
    public PutLabelsIdResponse withLabel(openapisdk.models.shared.Label label) {
        this.label = label;
        return this;
    }
    public Long statusCode;
    public PutLabelsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PutLabelsId400ApplicationJson putLabelsId400ApplicationJSONObject;
    public PutLabelsIdResponse withPutLabelsId400ApplicationJsonObject(PutLabelsId400ApplicationJson putLabelsId400ApplicationJSONObject) {
        this.putLabelsId400ApplicationJSONObject = putLabelsId400ApplicationJSONObject;
        return this;
    }
    public PutLabelsId401ApplicationJson putLabelsId401ApplicationJSONObject;
    public PutLabelsIdResponse withPutLabelsId401ApplicationJsonObject(PutLabelsId401ApplicationJson putLabelsId401ApplicationJSONObject) {
        this.putLabelsId401ApplicationJSONObject = putLabelsId401ApplicationJSONObject;
        return this;
    }
    public PutLabelsId404ApplicationJson putLabelsId404ApplicationJSONObject;
    public PutLabelsIdResponse withPutLabelsId404ApplicationJsonObject(PutLabelsId404ApplicationJson putLabelsId404ApplicationJSONObject) {
        this.putLabelsId404ApplicationJSONObject = putLabelsId404ApplicationJSONObject;
        return this;
    }
}