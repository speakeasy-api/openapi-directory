package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsPathParams withName(String name) {
        this.name = name;
        return this;
    }
}