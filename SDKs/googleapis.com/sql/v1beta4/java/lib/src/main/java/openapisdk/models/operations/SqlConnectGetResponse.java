package openapisdk.models.operations;



public class SqlConnectGetResponse {
    public openapisdk.models.shared.ConnectSettings connectSettings;
    public SqlConnectGetResponse withConnectSettings(openapisdk.models.shared.ConnectSettings connectSettings) {
        this.connectSettings = connectSettings;
        return this;
    }
    public String contentType;
    public SqlConnectGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SqlConnectGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}