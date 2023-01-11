package openapisdk.models.operations;



public class Adexchangebuyer2BiddersFilterSetsImpressionMetricsListResponse {
    public String contentType;
    public Adexchangebuyer2BiddersFilterSetsImpressionMetricsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListImpressionMetricsResponse listImpressionMetricsResponse;
    public Adexchangebuyer2BiddersFilterSetsImpressionMetricsListResponse withListImpressionMetricsResponse(openapisdk.models.shared.ListImpressionMetricsResponse listImpressionMetricsResponse) {
        this.listImpressionMetricsResponse = listImpressionMetricsResponse;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2BiddersFilterSetsImpressionMetricsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}