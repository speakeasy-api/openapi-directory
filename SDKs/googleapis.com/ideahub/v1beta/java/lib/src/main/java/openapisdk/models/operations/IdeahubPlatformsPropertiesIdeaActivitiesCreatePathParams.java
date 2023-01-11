package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdeahubPlatformsPropertiesIdeaActivitiesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public IdeahubPlatformsPropertiesIdeaActivitiesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}