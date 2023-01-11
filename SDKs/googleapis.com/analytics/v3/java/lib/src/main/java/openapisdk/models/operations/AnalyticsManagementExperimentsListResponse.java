package openapisdk.models.operations;



public class AnalyticsManagementExperimentsListResponse {
    public String contentType;
    public AnalyticsManagementExperimentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Experiments experiments;
    public AnalyticsManagementExperimentsListResponse withExperiments(openapisdk.models.shared.Experiments experiments) {
        this.experiments = experiments;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementExperimentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}