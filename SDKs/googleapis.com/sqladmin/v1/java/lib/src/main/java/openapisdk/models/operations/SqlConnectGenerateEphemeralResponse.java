package openapisdk.models.operations;



public class SqlConnectGenerateEphemeralResponse {
    public String contentType;
    public SqlConnectGenerateEphemeralResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GenerateEphemeralCertResponse generateEphemeralCertResponse;
    public SqlConnectGenerateEphemeralResponse withGenerateEphemeralCertResponse(openapisdk.models.shared.GenerateEphemeralCertResponse generateEphemeralCertResponse) {
        this.generateEphemeralCertResponse = generateEphemeralCertResponse;
        return this;
    }
    public Long statusCode;
    public SqlConnectGenerateEphemeralResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}