package openapisdk.models.operations;



public class DfareportingFloodlightConfigurationsUpdateResponse {
    public String contentType;
    public DfareportingFloodlightConfigurationsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FloodlightConfiguration floodlightConfiguration;
    public DfareportingFloodlightConfigurationsUpdateResponse withFloodlightConfiguration(openapisdk.models.shared.FloodlightConfiguration floodlightConfiguration) {
        this.floodlightConfiguration = floodlightConfiguration;
        return this;
    }
    public Long statusCode;
    public DfareportingFloodlightConfigurationsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}