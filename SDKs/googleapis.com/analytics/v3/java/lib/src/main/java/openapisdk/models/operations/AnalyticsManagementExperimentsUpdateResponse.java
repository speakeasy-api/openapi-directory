package openapisdk.models.operations;



public class AnalyticsManagementExperimentsUpdateResponse {
    public String contentType;
    public AnalyticsManagementExperimentsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Experiment experiment;
    public AnalyticsManagementExperimentsUpdateResponse withExperiment(openapisdk.models.shared.Experiment experiment) {
        this.experiment = experiment;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementExperimentsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}