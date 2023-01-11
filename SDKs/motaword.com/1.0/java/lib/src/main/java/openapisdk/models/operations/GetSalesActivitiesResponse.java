package openapisdk.models.operations;



public class GetSalesActivitiesResponse {
    public String contentType;
    public GetSalesActivitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetSalesActivitiesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.SalesActivities salesActivities;
    public GetSalesActivitiesResponse withSalesActivities(openapisdk.models.shared.SalesActivities salesActivities) {
        this.salesActivities = salesActivities;
        return this;
    }
    public Long statusCode;
    public GetSalesActivitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}