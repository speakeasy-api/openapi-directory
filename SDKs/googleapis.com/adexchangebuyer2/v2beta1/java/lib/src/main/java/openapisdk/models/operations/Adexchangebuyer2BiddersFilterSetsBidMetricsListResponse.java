package openapisdk.models.operations;



public class Adexchangebuyer2BiddersFilterSetsBidMetricsListResponse {
    public String contentType;
    public Adexchangebuyer2BiddersFilterSetsBidMetricsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListBidMetricsResponse listBidMetricsResponse;
    public Adexchangebuyer2BiddersFilterSetsBidMetricsListResponse withListBidMetricsResponse(openapisdk.models.shared.ListBidMetricsResponse listBidMetricsResponse) {
        this.listBidMetricsResponse = listBidMetricsResponse;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2BiddersFilterSetsBidMetricsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}