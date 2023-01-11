package openapisdk.models.operations;



public class AnalyticsManagementExperimentsGetResponse {
    public String contentType;
    public AnalyticsManagementExperimentsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Experiment experiment;
    public AnalyticsManagementExperimentsGetResponse withExperiment(openapisdk.models.shared.Experiment experiment) {
        this.experiment = experiment;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementExperimentsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}