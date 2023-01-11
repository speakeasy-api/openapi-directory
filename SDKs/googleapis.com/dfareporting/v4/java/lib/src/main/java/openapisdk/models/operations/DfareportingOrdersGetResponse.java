package openapisdk.models.operations;



public class DfareportingOrdersGetResponse {
    public String contentType;
    public DfareportingOrdersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Order order;
    public DfareportingOrdersGetResponse withOrder(openapisdk.models.shared.Order order) {
        this.order = order;
        return this;
    }
    public Long statusCode;
    public DfareportingOrdersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}