package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdeahubPlatformsPropertiesLocalesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public IdeahubPlatformsPropertiesLocalesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}