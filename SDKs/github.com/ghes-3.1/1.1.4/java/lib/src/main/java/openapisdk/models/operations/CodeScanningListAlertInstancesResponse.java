package openapisdk.models.operations;



public class CodeScanningListAlertInstancesResponse {
    public String contentType;
    public CodeScanningListAlertInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CodeScanningListAlertInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public CodeScanningListAlertInstancesResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.CodeScanningAlertInstance[] codeScanningAlertInstances;
    public CodeScanningListAlertInstancesResponse withCodeScanningAlertInstances(openapisdk.models.shared.CodeScanningAlertInstance[] codeScanningAlertInstances) {
        this.codeScanningAlertInstances = codeScanningAlertInstances;
        return this;
    }
    public CodeScanningListAlertInstances503ApplicationJson codeScanningListAlertInstances503ApplicationJSONObject;
    public CodeScanningListAlertInstancesResponse withCodeScanningListAlertInstances503ApplicationJsonObject(CodeScanningListAlertInstances503ApplicationJson codeScanningListAlertInstances503ApplicationJSONObject) {
        this.codeScanningListAlertInstances503ApplicationJSONObject = codeScanningListAlertInstances503ApplicationJSONObject;
        return this;
    }
}