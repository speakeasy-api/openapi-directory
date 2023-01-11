package openapisdk.models.operations;



public class RunNamespacesConfigurationsListResponse {
    public String contentType;
    public RunNamespacesConfigurationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListConfigurationsResponse listConfigurationsResponse;
    public RunNamespacesConfigurationsListResponse withListConfigurationsResponse(openapisdk.models.shared.ListConfigurationsResponse listConfigurationsResponse) {
        this.listConfigurationsResponse = listConfigurationsResponse;
        return this;
    }
    public Long statusCode;
    public RunNamespacesConfigurationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}