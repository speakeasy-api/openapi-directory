package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdeahubPlatformsPropertiesIdeasListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public IdeahubPlatformsPropertiesIdeasListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}