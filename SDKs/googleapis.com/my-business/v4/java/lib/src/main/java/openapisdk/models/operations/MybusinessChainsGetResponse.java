package openapisdk.models.operations;



public class MybusinessChainsGetResponse {
    public openapisdk.models.shared.Chain chain;
    public MybusinessChainsGetResponse withChain(openapisdk.models.shared.Chain chain) {
        this.chain = chain;
        return this;
    }
    public String contentType;
    public MybusinessChainsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MybusinessChainsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}