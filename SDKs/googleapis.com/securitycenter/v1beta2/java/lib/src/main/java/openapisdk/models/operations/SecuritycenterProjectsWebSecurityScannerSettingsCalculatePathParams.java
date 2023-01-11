package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterProjectsWebSecurityScannerSettingsCalculatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public SecuritycenterProjectsWebSecurityScannerSettingsCalculatePathParams withName(String name) {
        this.name = name;
        return this;
    }
}