package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResourcesettingsProjectsSettingsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ResourcesettingsProjectsSettingsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}