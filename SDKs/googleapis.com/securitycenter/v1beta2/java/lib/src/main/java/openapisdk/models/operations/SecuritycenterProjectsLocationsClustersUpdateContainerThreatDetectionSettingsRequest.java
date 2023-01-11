package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsRequest {
    public SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsPathParams pathParams;
    public SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsRequest withPathParams(SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsQueryParams queryParams;
    public SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsRequest withQueryParams(SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ContainerThreatDetectionSettingsInput request;
    public SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsRequest withRequest(openapisdk.models.shared.ContainerThreatDetectionSettingsInput request) {
        this.request = request;
        return this;
    }
    public SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsSecurity security;
    public SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsRequest withSecurity(SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsSecurity security) {
        this.security = security;
        return this;
    }
}