package openapisdk.models.operations;



public class CodeScanningGetAnalysisResponse {
    public String contentType;
    public CodeScanningGetAnalysisResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CodeScanningGetAnalysisResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public CodeScanningGetAnalysisResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.CodeScanningAnalysis codeScanningAnalysis;
    public CodeScanningGetAnalysisResponse withCodeScanningAnalysis(openapisdk.models.shared.CodeScanningAnalysis codeScanningAnalysis) {
        this.codeScanningAnalysis = codeScanningAnalysis;
        return this;
    }
    public String codeScanningGetAnalysis200ApplicationJsonPlusSarifString;
    public CodeScanningGetAnalysisResponse withCodeScanningGetAnalysis200ApplicationJsonPlusSarifString(String codeScanningGetAnalysis200ApplicationJsonPlusSarifString) {
        this.codeScanningGetAnalysis200ApplicationJsonPlusSarifString = codeScanningGetAnalysis200ApplicationJsonPlusSarifString;
        return this;
    }
    public CodeScanningGetAnalysis503ApplicationJson codeScanningGetAnalysis503ApplicationJSONObject;
    public CodeScanningGetAnalysisResponse withCodeScanningGetAnalysis503ApplicationJsonObject(CodeScanningGetAnalysis503ApplicationJson codeScanningGetAnalysis503ApplicationJSONObject) {
        this.codeScanningGetAnalysis503ApplicationJSONObject = codeScanningGetAnalysis503ApplicationJSONObject;
        return this;
    }
}