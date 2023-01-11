package openapisdk.models.operations;



public class NetworkUnblockResponse {
    public String contentType;
    public NetworkUnblockResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorThrottled errorThrottled;
    public NetworkUnblockResponse withErrorThrottled(openapisdk.models.shared.ErrorThrottled errorThrottled) {
        this.errorThrottled = errorThrottled;
        return this;
    }
    public Long statusCode;
    public NetworkUnblockResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.NetworkUnblockResponseForbidden networkUnblockResponseForbidden;
    public NetworkUnblockResponse withNetworkUnblockResponseForbidden(openapisdk.models.shared.NetworkUnblockResponseForbidden networkUnblockResponseForbidden) {
        this.networkUnblockResponseForbidden = networkUnblockResponseForbidden;
        return this;
    }
    public openapisdk.models.shared.NetworkUnblockResponseNotFound networkUnblockResponseNotFound;
    public NetworkUnblockResponse withNetworkUnblockResponseNotFound(openapisdk.models.shared.NetworkUnblockResponseNotFound networkUnblockResponseNotFound) {
        this.networkUnblockResponseNotFound = networkUnblockResponseNotFound;
        return this;
    }
    public openapisdk.models.shared.NetworkUnblockResponseOk networkUnblockResponseOk;
    public NetworkUnblockResponse withNetworkUnblockResponseOk(openapisdk.models.shared.NetworkUnblockResponseOk networkUnblockResponseOk) {
        this.networkUnblockResponseOk = networkUnblockResponseOk;
        return this;
    }
    public Object networkUnblock422ApplicationJSONOneOf;
    public NetworkUnblockResponse withNetworkUnblock422ApplicationJsonOneOf(Object networkUnblock422ApplicationJSONOneOf) {
        this.networkUnblock422ApplicationJSONOneOf = networkUnblock422ApplicationJSONOneOf;
        return this;
    }
}