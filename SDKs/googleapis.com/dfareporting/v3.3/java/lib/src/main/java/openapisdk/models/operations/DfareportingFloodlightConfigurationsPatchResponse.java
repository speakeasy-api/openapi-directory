package openapisdk.models.operations;



public class DfareportingFloodlightConfigurationsPatchResponse {
    public String contentType;
    public DfareportingFloodlightConfigurationsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FloodlightConfiguration floodlightConfiguration;
    public DfareportingFloodlightConfigurationsPatchResponse withFloodlightConfiguration(openapisdk.models.shared.FloodlightConfiguration floodlightConfiguration) {
        this.floodlightConfiguration = floodlightConfiguration;
        return this;
    }
    public Long statusCode;
    public DfareportingFloodlightConfigurationsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}