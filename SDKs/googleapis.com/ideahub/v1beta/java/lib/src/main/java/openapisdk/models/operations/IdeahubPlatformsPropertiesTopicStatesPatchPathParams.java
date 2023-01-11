package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdeahubPlatformsPropertiesTopicStatesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public IdeahubPlatformsPropertiesTopicStatesPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}