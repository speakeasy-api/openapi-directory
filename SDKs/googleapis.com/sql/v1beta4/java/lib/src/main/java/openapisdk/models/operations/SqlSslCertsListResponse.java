package openapisdk.models.operations;



public class SqlSslCertsListResponse {
    public String contentType;
    public SqlSslCertsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SslCertsListResponse sslCertsListResponse;
    public SqlSslCertsListResponse withSslCertsListResponse(openapisdk.models.shared.SslCertsListResponse sslCertsListResponse) {
        this.sslCertsListResponse = sslCertsListResponse;
        return this;
    }
    public Long statusCode;
    public SqlSslCertsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}