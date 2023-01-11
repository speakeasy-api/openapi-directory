package openapisdk.models.operations;



public class AnalyticsManagementExperimentsPatchResponse {
    public String contentType;
    public AnalyticsManagementExperimentsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Experiment experiment;
    public AnalyticsManagementExperimentsPatchResponse withExperiment(openapisdk.models.shared.Experiment experiment) {
        this.experiment = experiment;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementExperimentsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}