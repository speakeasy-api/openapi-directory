package openapisdk.models.operations;



public class PatchLabelsIdResponse {
    public String contentType;
    public PatchLabelsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Label label;
    public PatchLabelsIdResponse withLabel(openapisdk.models.shared.Label label) {
        this.label = label;
        return this;
    }
    public Long statusCode;
    public PatchLabelsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PatchLabelsId401ApplicationJson patchLabelsId401ApplicationJSONObject;
    public PatchLabelsIdResponse withPatchLabelsId401ApplicationJsonObject(PatchLabelsId401ApplicationJson patchLabelsId401ApplicationJSONObject) {
        this.patchLabelsId401ApplicationJSONObject = patchLabelsId401ApplicationJSONObject;
        return this;
    }
    public PatchLabelsId404ApplicationJson patchLabelsId404ApplicationJSONObject;
    public PatchLabelsIdResponse withPatchLabelsId404ApplicationJsonObject(PatchLabelsId404ApplicationJson patchLabelsId404ApplicationJSONObject) {
        this.patchLabelsId404ApplicationJSONObject = patchLabelsId404ApplicationJSONObject;
        return this;
    }
}