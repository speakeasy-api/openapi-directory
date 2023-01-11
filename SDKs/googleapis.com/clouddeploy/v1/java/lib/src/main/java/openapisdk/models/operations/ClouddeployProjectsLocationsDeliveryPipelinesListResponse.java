package openapisdk.models.operations;



public class ClouddeployProjectsLocationsDeliveryPipelinesListResponse {
    public String contentType;
    public ClouddeployProjectsLocationsDeliveryPipelinesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDeliveryPipelinesResponse listDeliveryPipelinesResponse;
    public ClouddeployProjectsLocationsDeliveryPipelinesListResponse withListDeliveryPipelinesResponse(openapisdk.models.shared.ListDeliveryPipelinesResponse listDeliveryPipelinesResponse) {
        this.listDeliveryPipelinesResponse = listDeliveryPipelinesResponse;
        return this;
    }
    public Long statusCode;
    public ClouddeployProjectsLocationsDeliveryPipelinesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}