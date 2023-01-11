package openapisdk.models.operations;



public class DfareportingFloodlightConfigurationsListResponse {
    public String contentType;
    public DfareportingFloodlightConfigurationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FloodlightConfigurationsListResponse floodlightConfigurationsListResponse;
    public DfareportingFloodlightConfigurationsListResponse withFloodlightConfigurationsListResponse(openapisdk.models.shared.FloodlightConfigurationsListResponse floodlightConfigurationsListResponse) {
        this.floodlightConfigurationsListResponse = floodlightConfigurationsListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingFloodlightConfigurationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}