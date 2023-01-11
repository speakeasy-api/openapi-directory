package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsPathParams withName(String name) {
        this.name = name;
        return this;
    }
}