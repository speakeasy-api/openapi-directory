package openapisdk.models.operations;



public class IpamAggregatesPartialUpdateResponse {
    public openapisdk.models.shared.Aggregate aggregate;
    public IpamAggregatesPartialUpdateResponse withAggregate(openapisdk.models.shared.Aggregate aggregate) {
        this.aggregate = aggregate;
        return this;
    }
    public String contentType;
    public IpamAggregatesPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamAggregatesPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}