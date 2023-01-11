package openapisdk.models.operations;



public class SqlSslCertsGetResponse {
    public String contentType;
    public SqlSslCertsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SslCert sslCert;
    public SqlSslCertsGetResponse withSslCert(openapisdk.models.shared.SslCert sslCert) {
        this.sslCert = sslCert;
        return this;
    }
    public Long statusCode;
    public SqlSslCertsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}