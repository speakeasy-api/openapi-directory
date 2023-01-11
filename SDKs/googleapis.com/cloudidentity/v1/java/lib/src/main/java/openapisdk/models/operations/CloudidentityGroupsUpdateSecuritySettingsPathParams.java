package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityGroupsUpdateSecuritySettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudidentityGroupsUpdateSecuritySettingsPathParams withName(String name) {
        this.name = name;
        return this;
    }
}