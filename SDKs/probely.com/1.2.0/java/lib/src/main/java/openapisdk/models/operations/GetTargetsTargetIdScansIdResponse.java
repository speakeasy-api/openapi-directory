package openapisdk.models.operations;



public class GetTargetsTargetIdScansIdResponse {
    public String contentType;
    public GetTargetsTargetIdScansIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Scan scan;
    public GetTargetsTargetIdScansIdResponse withScan(openapisdk.models.shared.Scan scan) {
        this.scan = scan;
        return this;
    }
    public Long statusCode;
    public GetTargetsTargetIdScansIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTargetsTargetIdScansId401ApplicationJson getTargetsTargetIdScansId401ApplicationJSONObject;
    public GetTargetsTargetIdScansIdResponse withGetTargetsTargetIdScansId401ApplicationJsonObject(GetTargetsTargetIdScansId401ApplicationJson getTargetsTargetIdScansId401ApplicationJSONObject) {
        this.getTargetsTargetIdScansId401ApplicationJSONObject = getTargetsTargetIdScansId401ApplicationJSONObject;
        return this;
    }
    public GetTargetsTargetIdScansId404ApplicationJson getTargetsTargetIdScansId404ApplicationJSONObject;
    public GetTargetsTargetIdScansIdResponse withGetTargetsTargetIdScansId404ApplicationJsonObject(GetTargetsTargetIdScansId404ApplicationJson getTargetsTargetIdScansId404ApplicationJSONObject) {
        this.getTargetsTargetIdScansId404ApplicationJSONObject = getTargetsTargetIdScansId404ApplicationJSONObject;
        return this;
    }
}