package openapisdk.models.operations;



public class ListMetricResponse {
    public String contentType;
    public ListMetricResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListMetricListMetricResponse listMetricResponse;
    public ListMetricResponse withListMetricResponse(ListMetricListMetricResponse listMetricResponse) {
        this.listMetricResponse = listMetricResponse;
        return this;
    }
    public Long statusCode;
    public ListMetricResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}