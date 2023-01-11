package openapisdk.models.operations;



public class GetCmsV3DomainsGetPageResponse {
    public byte[] body;
    public GetCmsV3DomainsGetPageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public openapisdk.models.shared.CollectionResponseWithTotalDomainForwardPaging collectionResponseWithTotalDomainForwardPaging;
    public GetCmsV3DomainsGetPageResponse withCollectionResponseWithTotalDomainForwardPaging(openapisdk.models.shared.CollectionResponseWithTotalDomainForwardPaging collectionResponseWithTotalDomainForwardPaging) {
        this.collectionResponseWithTotalDomainForwardPaging = collectionResponseWithTotalDomainForwardPaging;
        return this;
    }
    public String contentType;
    public GetCmsV3DomainsGetPageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCmsV3DomainsGetPageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}