package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResourcesettingsProjectsSettingsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ResourcesettingsProjectsSettingsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}