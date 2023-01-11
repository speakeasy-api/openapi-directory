package openapisdk.models.operations;



public class MonitoringServicesServiceLevelObjectivesGetResponse {
    public String contentType;
    public MonitoringServicesServiceLevelObjectivesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceLevelObjective serviceLevelObjective;
    public MonitoringServicesServiceLevelObjectivesGetResponse withServiceLevelObjective(openapisdk.models.shared.ServiceLevelObjective serviceLevelObjective) {
        this.serviceLevelObjective = serviceLevelObjective;
        return this;
    }
    public Long statusCode;
    public MonitoringServicesServiceLevelObjectivesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}