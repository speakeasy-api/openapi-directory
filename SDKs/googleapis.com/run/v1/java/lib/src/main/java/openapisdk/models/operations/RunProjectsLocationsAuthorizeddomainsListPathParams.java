package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunProjectsLocationsAuthorizeddomainsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RunProjectsLocationsAuthorizeddomainsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}