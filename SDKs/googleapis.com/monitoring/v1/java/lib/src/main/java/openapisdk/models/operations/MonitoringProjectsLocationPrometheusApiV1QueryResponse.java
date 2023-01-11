package openapisdk.models.operations;



public class MonitoringProjectsLocationPrometheusApiV1QueryResponse {
    public String contentType;
    public MonitoringProjectsLocationPrometheusApiV1QueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpBody httpBody;
    public MonitoringProjectsLocationPrometheusApiV1QueryResponse withHttpBody(openapisdk.models.shared.HttpBody httpBody) {
        this.httpBody = httpBody;
        return this;
    }
    public Long statusCode;
    public MonitoringProjectsLocationPrometheusApiV1QueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}