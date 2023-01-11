package openapisdk.models.operations;



public class SqlSslCertsCreateEphemeralResponse {
    public String contentType;
    public SqlSslCertsCreateEphemeralResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SslCert sslCert;
    public SqlSslCertsCreateEphemeralResponse withSslCert(openapisdk.models.shared.SslCert sslCert) {
        this.sslCert = sslCert;
        return this;
    }
    public Long statusCode;
    public SqlSslCertsCreateEphemeralResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}