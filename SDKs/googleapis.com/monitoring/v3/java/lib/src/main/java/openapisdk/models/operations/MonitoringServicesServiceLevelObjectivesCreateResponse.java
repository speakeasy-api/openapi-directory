package openapisdk.models.operations;



public class MonitoringServicesServiceLevelObjectivesCreateResponse {
    public String contentType;
    public MonitoringServicesServiceLevelObjectivesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceLevelObjective serviceLevelObjective;
    public MonitoringServicesServiceLevelObjectivesCreateResponse withServiceLevelObjective(openapisdk.models.shared.ServiceLevelObjective serviceLevelObjective) {
        this.serviceLevelObjective = serviceLevelObjective;
        return this;
    }
    public Long statusCode;
    public MonitoringServicesServiceLevelObjectivesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}