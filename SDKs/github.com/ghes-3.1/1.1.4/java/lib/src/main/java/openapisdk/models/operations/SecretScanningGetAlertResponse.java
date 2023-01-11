package openapisdk.models.operations;



public class SecretScanningGetAlertResponse {
    public String contentType;
    public SecretScanningGetAlertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SecretScanningGetAlertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SecretScanningAlert secretScanningAlert;
    public SecretScanningGetAlertResponse withSecretScanningAlert(openapisdk.models.shared.SecretScanningAlert secretScanningAlert) {
        this.secretScanningAlert = secretScanningAlert;
        return this;
    }
    public SecretScanningGetAlert503ApplicationJson secretScanningGetAlert503ApplicationJSONObject;
    public SecretScanningGetAlertResponse withSecretScanningGetAlert503ApplicationJsonObject(SecretScanningGetAlert503ApplicationJson secretScanningGetAlert503ApplicationJSONObject) {
        this.secretScanningGetAlert503ApplicationJSONObject = secretScanningGetAlert503ApplicationJSONObject;
        return this;
    }
}