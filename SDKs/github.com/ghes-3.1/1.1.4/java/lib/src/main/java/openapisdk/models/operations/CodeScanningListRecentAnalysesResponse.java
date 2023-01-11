package openapisdk.models.operations;



public class CodeScanningListRecentAnalysesResponse {
    public String contentType;
    public CodeScanningListRecentAnalysesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CodeScanningListRecentAnalysesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public CodeScanningListRecentAnalysesResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.CodeScanningAnalysis[] codeScanningAnalyses;
    public CodeScanningListRecentAnalysesResponse withCodeScanningAnalyses(openapisdk.models.shared.CodeScanningAnalysis[] codeScanningAnalyses) {
        this.codeScanningAnalyses = codeScanningAnalyses;
        return this;
    }
    public CodeScanningListRecentAnalyses503ApplicationJson codeScanningListRecentAnalyses503ApplicationJSONObject;
    public CodeScanningListRecentAnalysesResponse withCodeScanningListRecentAnalyses503ApplicationJsonObject(CodeScanningListRecentAnalyses503ApplicationJson codeScanningListRecentAnalyses503ApplicationJSONObject) {
        this.codeScanningListRecentAnalyses503ApplicationJSONObject = codeScanningListRecentAnalyses503ApplicationJSONObject;
        return this;
    }
}