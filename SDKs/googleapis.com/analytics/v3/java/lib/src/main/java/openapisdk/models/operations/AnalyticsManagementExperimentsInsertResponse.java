package openapisdk.models.operations;



public class AnalyticsManagementExperimentsInsertResponse {
    public String contentType;
    public AnalyticsManagementExperimentsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Experiment experiment;
    public AnalyticsManagementExperimentsInsertResponse withExperiment(openapisdk.models.shared.Experiment experiment) {
        this.experiment = experiment;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementExperimentsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}