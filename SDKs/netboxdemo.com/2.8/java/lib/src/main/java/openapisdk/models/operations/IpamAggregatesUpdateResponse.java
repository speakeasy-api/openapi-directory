package openapisdk.models.operations;



public class IpamAggregatesUpdateResponse {
    public openapisdk.models.shared.Aggregate aggregate;
    public IpamAggregatesUpdateResponse withAggregate(openapisdk.models.shared.Aggregate aggregate) {
        this.aggregate = aggregate;
        return this;
    }
    public String contentType;
    public IpamAggregatesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamAggregatesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}