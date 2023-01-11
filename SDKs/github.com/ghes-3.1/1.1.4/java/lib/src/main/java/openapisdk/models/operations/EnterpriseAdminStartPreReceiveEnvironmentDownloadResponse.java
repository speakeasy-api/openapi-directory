package openapisdk.models.operations;



public class EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse {
    public String contentType;
    public EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJson enterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSONObject;
    public EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse withEnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJsonObject(EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJson enterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSONObject) {
        this.enterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSONObject = enterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.PreReceiveEnvironmentDownloadStatus preReceiveEnvironmentDownloadStatus;
    public EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse withPreReceiveEnvironmentDownloadStatus(openapisdk.models.shared.PreReceiveEnvironmentDownloadStatus preReceiveEnvironmentDownloadStatus) {
        this.preReceiveEnvironmentDownloadStatus = preReceiveEnvironmentDownloadStatus;
        return this;
    }
}