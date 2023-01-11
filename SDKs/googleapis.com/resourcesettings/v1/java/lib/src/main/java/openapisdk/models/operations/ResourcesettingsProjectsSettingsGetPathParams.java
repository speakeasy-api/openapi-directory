package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResourcesettingsProjectsSettingsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ResourcesettingsProjectsSettingsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}