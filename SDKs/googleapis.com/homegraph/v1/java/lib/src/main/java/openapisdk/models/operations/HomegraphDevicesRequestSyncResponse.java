package openapisdk.models.operations;



public class HomegraphDevicesRequestSyncResponse {
    public String contentType;
    public HomegraphDevicesRequestSyncResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> requestSyncDevicesResponse;
    public HomegraphDevicesRequestSyncResponse withRequestSyncDevicesResponse(java.util.Map<String, Object> requestSyncDevicesResponse) {
        this.requestSyncDevicesResponse = requestSyncDevicesResponse;
        return this;
    }
    public Long statusCode;
    public HomegraphDevicesRequestSyncResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}