package openapisdk.models.operations;



public class MonitoringServicesServiceLevelObjectivesListResponse {
    public String contentType;
    public MonitoringServicesServiceLevelObjectivesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListServiceLevelObjectivesResponse listServiceLevelObjectivesResponse;
    public MonitoringServicesServiceLevelObjectivesListResponse withListServiceLevelObjectivesResponse(openapisdk.models.shared.ListServiceLevelObjectivesResponse listServiceLevelObjectivesResponse) {
        this.listServiceLevelObjectivesResponse = listServiceLevelObjectivesResponse;
        return this;
    }
    public Long statusCode;
    public MonitoringServicesServiceLevelObjectivesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}