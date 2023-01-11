package openapisdk.models.operations;



public class SecretScanningListAlertsForRepoResponse {
    public String contentType;
    public SecretScanningListAlertsForRepoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SecretScanningListAlertsForRepoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SecretScanningAlert[] secretScanningAlerts;
    public SecretScanningListAlertsForRepoResponse withSecretScanningAlerts(openapisdk.models.shared.SecretScanningAlert[] secretScanningAlerts) {
        this.secretScanningAlerts = secretScanningAlerts;
        return this;
    }
    public SecretScanningListAlertsForRepo503ApplicationJson secretScanningListAlertsForRepo503ApplicationJSONObject;
    public SecretScanningListAlertsForRepoResponse withSecretScanningListAlertsForRepo503ApplicationJsonObject(SecretScanningListAlertsForRepo503ApplicationJson secretScanningListAlertsForRepo503ApplicationJSONObject) {
        this.secretScanningListAlertsForRepo503ApplicationJSONObject = secretScanningListAlertsForRepo503ApplicationJSONObject;
        return this;
    }
}