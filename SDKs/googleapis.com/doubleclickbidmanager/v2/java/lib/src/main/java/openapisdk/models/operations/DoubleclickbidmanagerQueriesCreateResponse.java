package openapisdk.models.operations;



public class DoubleclickbidmanagerQueriesCreateResponse {
    public String contentType;
    public DoubleclickbidmanagerQueriesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Query query;
    public DoubleclickbidmanagerQueriesCreateResponse withQuery(openapisdk.models.shared.Query query) {
        this.query = query;
        return this;
    }
    public Long statusCode;
    public DoubleclickbidmanagerQueriesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}