package openapisdk.models.operations;



public class SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsResponse {
    public openapisdk.models.shared.ContainerThreatDetectionSettings containerThreatDetectionSettings;
    public SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsResponse withContainerThreatDetectionSettings(openapisdk.models.shared.ContainerThreatDetectionSettings containerThreatDetectionSettings) {
        this.containerThreatDetectionSettings = containerThreatDetectionSettings;
        return this;
    }
    public String contentType;
    public SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}