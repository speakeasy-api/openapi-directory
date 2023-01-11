package openapisdk.models.operations;



public class DoubleclickbidmanagerQueriesGetResponse {
    public String contentType;
    public DoubleclickbidmanagerQueriesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Query query;
    public DoubleclickbidmanagerQueriesGetResponse withQuery(openapisdk.models.shared.Query query) {
        this.query = query;
        return this;
    }
    public Long statusCode;
    public DoubleclickbidmanagerQueriesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}