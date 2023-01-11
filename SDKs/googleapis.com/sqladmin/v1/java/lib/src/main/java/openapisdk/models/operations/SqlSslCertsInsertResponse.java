package openapisdk.models.operations;



public class SqlSslCertsInsertResponse {
    public String contentType;
    public SqlSslCertsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SslCertsInsertResponse sslCertsInsertResponse;
    public SqlSslCertsInsertResponse withSslCertsInsertResponse(openapisdk.models.shared.SslCertsInsertResponse sslCertsInsertResponse) {
        this.sslCertsInsertResponse = sslCertsInsertResponse;
        return this;
    }
    public Long statusCode;
    public SqlSslCertsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}