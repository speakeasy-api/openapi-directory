package openapisdk.models.operations;



public class MonitoringServicesServiceLevelObjectivesPatchResponse {
    public String contentType;
    public MonitoringServicesServiceLevelObjectivesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceLevelObjective serviceLevelObjective;
    public MonitoringServicesServiceLevelObjectivesPatchResponse withServiceLevelObjective(openapisdk.models.shared.ServiceLevelObjective serviceLevelObjective) {
        this.serviceLevelObjective = serviceLevelObjective;
        return this;
    }
    public Long statusCode;
    public MonitoringServicesServiceLevelObjectivesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}