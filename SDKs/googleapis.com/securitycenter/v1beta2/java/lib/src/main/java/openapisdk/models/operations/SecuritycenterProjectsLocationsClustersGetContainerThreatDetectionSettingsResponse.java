package openapisdk.models.operations;



public class SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse {
    public openapisdk.models.shared.ContainerThreatDetectionSettings containerThreatDetectionSettings;
    public SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse withContainerThreatDetectionSettings(openapisdk.models.shared.ContainerThreatDetectionSettings containerThreatDetectionSettings) {
        this.containerThreatDetectionSettings = containerThreatDetectionSettings;
        return this;
    }
    public String contentType;
    public SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}