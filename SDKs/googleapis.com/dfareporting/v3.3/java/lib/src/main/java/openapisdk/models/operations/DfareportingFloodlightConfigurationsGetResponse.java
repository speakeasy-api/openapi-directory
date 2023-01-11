package openapisdk.models.operations;



public class DfareportingFloodlightConfigurationsGetResponse {
    public String contentType;
    public DfareportingFloodlightConfigurationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FloodlightConfiguration floodlightConfiguration;
    public DfareportingFloodlightConfigurationsGetResponse withFloodlightConfiguration(openapisdk.models.shared.FloodlightConfiguration floodlightConfiguration) {
        this.floodlightConfiguration = floodlightConfiguration;
        return this;
    }
    public Long statusCode;
    public DfareportingFloodlightConfigurationsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}