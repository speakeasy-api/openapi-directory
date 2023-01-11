package openapisdk.models.operations;



public class IpamAggregatesCreateResponse {
    public openapisdk.models.shared.Aggregate aggregate;
    public IpamAggregatesCreateResponse withAggregate(openapisdk.models.shared.Aggregate aggregate) {
        this.aggregate = aggregate;
        return this;
    }
    public String contentType;
    public IpamAggregatesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamAggregatesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}