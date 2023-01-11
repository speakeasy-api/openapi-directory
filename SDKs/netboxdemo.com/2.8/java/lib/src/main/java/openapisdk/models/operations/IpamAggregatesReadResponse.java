package openapisdk.models.operations;



public class IpamAggregatesReadResponse {
    public openapisdk.models.shared.Aggregate aggregate;
    public IpamAggregatesReadResponse withAggregate(openapisdk.models.shared.Aggregate aggregate) {
        this.aggregate = aggregate;
        return this;
    }
    public String contentType;
    public IpamAggregatesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamAggregatesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}