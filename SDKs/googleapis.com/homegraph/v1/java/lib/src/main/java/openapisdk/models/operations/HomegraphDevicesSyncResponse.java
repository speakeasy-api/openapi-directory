package openapisdk.models.operations;



public class HomegraphDevicesSyncResponse {
    public String contentType;
    public HomegraphDevicesSyncResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public HomegraphDevicesSyncResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncResponse syncResponse;
    public HomegraphDevicesSyncResponse withSyncResponse(openapisdk.models.shared.SyncResponse syncResponse) {
        this.syncResponse = syncResponse;
        return this;
    }
}