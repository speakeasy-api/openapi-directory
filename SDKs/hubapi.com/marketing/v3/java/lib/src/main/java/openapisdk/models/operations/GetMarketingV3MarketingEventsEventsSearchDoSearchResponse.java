package openapisdk.models.operations;



public class GetMarketingV3MarketingEventsEventsSearchDoSearchResponse {
    public byte[] body;
    public GetMarketingV3MarketingEventsEventsSearchDoSearchResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public openapisdk.models.shared.CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging collectionResponseMarketingEventExternalUniqueIdentifierNoPaging;
    public GetMarketingV3MarketingEventsEventsSearchDoSearchResponse withCollectionResponseMarketingEventExternalUniqueIdentifierNoPaging(openapisdk.models.shared.CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging collectionResponseMarketingEventExternalUniqueIdentifierNoPaging) {
        this.collectionResponseMarketingEventExternalUniqueIdentifierNoPaging = collectionResponseMarketingEventExternalUniqueIdentifierNoPaging;
        return this;
    }
    public String contentType;
    public GetMarketingV3MarketingEventsEventsSearchDoSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMarketingV3MarketingEventsEventsSearchDoSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}