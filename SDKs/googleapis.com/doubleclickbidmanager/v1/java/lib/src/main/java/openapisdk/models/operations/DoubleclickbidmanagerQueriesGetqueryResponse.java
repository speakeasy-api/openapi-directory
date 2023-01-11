package openapisdk.models.operations;



public class DoubleclickbidmanagerQueriesGetqueryResponse {
    public String contentType;
    public DoubleclickbidmanagerQueriesGetqueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Query query;
    public DoubleclickbidmanagerQueriesGetqueryResponse withQuery(openapisdk.models.shared.Query query) {
        this.query = query;
        return this;
    }
    public Long statusCode;
    public DoubleclickbidmanagerQueriesGetqueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}