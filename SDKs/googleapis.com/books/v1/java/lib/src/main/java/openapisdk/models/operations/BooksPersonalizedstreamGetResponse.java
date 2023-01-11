package openapisdk.models.operations;



public class BooksPersonalizedstreamGetResponse {
    public String contentType;
    public BooksPersonalizedstreamGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Discoveryclusters discoveryclusters;
    public BooksPersonalizedstreamGetResponse withDiscoveryclusters(openapisdk.models.shared.Discoveryclusters discoveryclusters) {
        this.discoveryclusters = discoveryclusters;
        return this;
    }
    public Long statusCode;
    public BooksPersonalizedstreamGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}