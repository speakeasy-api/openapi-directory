package openapisdk.models.operations;



public class PatchGlobalAuthModuleResponse {
    public String contentType;
    public PatchGlobalAuthModuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchGlobalAuthModuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object patchGlobalAuthModule200ApplicationJSONOneOf;
    public PatchGlobalAuthModuleResponse withPatchGlobalAuthModule200ApplicationJsonOneOf(Object patchGlobalAuthModule200ApplicationJSONOneOf) {
        this.patchGlobalAuthModule200ApplicationJSONOneOf = patchGlobalAuthModule200ApplicationJSONOneOf;
        return this;
    }
}