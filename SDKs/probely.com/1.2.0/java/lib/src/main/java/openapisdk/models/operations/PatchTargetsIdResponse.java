package openapisdk.models.operations;



public class PatchTargetsIdResponse {
    public String contentType;
    public PatchTargetsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchTargetsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Target target;
    public PatchTargetsIdResponse withTarget(openapisdk.models.shared.Target target) {
        this.target = target;
        return this;
    }
    public PatchTargetsId400ApplicationJson patchTargetsId400ApplicationJSONObject;
    public PatchTargetsIdResponse withPatchTargetsId400ApplicationJsonObject(PatchTargetsId400ApplicationJson patchTargetsId400ApplicationJSONObject) {
        this.patchTargetsId400ApplicationJSONObject = patchTargetsId400ApplicationJSONObject;
        return this;
    }
    public PatchTargetsId401ApplicationJson patchTargetsId401ApplicationJSONObject;
    public PatchTargetsIdResponse withPatchTargetsId401ApplicationJsonObject(PatchTargetsId401ApplicationJson patchTargetsId401ApplicationJSONObject) {
        this.patchTargetsId401ApplicationJSONObject = patchTargetsId401ApplicationJSONObject;
        return this;
    }
    public PatchTargetsId403ApplicationJson patchTargetsId403ApplicationJSONObject;
    public PatchTargetsIdResponse withPatchTargetsId403ApplicationJsonObject(PatchTargetsId403ApplicationJson patchTargetsId403ApplicationJSONObject) {
        this.patchTargetsId403ApplicationJSONObject = patchTargetsId403ApplicationJSONObject;
        return this;
    }
    public PatchTargetsId404ApplicationJson patchTargetsId404ApplicationJSONObject;
    public PatchTargetsIdResponse withPatchTargetsId404ApplicationJsonObject(PatchTargetsId404ApplicationJson patchTargetsId404ApplicationJSONObject) {
        this.patchTargetsId404ApplicationJSONObject = patchTargetsId404ApplicationJSONObject;
        return this;
    }
}