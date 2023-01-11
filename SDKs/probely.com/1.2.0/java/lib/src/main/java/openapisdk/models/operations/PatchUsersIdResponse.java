package openapisdk.models.operations;



public class PatchUsersIdResponse {
    public String contentType;
    public PatchUsersIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchUsersIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public PatchUsersIdResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
    public PatchUsersId400ApplicationJson patchUsersId400ApplicationJSONObject;
    public PatchUsersIdResponse withPatchUsersId400ApplicationJsonObject(PatchUsersId400ApplicationJson patchUsersId400ApplicationJSONObject) {
        this.patchUsersId400ApplicationJSONObject = patchUsersId400ApplicationJSONObject;
        return this;
    }
    public PatchUsersId401ApplicationJson patchUsersId401ApplicationJSONObject;
    public PatchUsersIdResponse withPatchUsersId401ApplicationJsonObject(PatchUsersId401ApplicationJson patchUsersId401ApplicationJSONObject) {
        this.patchUsersId401ApplicationJSONObject = patchUsersId401ApplicationJSONObject;
        return this;
    }
    public PatchUsersId403ApplicationJson patchUsersId403ApplicationJSONObject;
    public PatchUsersIdResponse withPatchUsersId403ApplicationJsonObject(PatchUsersId403ApplicationJson patchUsersId403ApplicationJSONObject) {
        this.patchUsersId403ApplicationJSONObject = patchUsersId403ApplicationJSONObject;
        return this;
    }
    public PatchUsersId404ApplicationJson patchUsersId404ApplicationJSONObject;
    public PatchUsersIdResponse withPatchUsersId404ApplicationJsonObject(PatchUsersId404ApplicationJson patchUsersId404ApplicationJSONObject) {
        this.patchUsersId404ApplicationJSONObject = patchUsersId404ApplicationJSONObject;
        return this;
    }
}