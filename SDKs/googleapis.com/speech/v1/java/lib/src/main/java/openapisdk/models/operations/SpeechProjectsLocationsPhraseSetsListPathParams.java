package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SpeechProjectsLocationsPhraseSetsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public SpeechProjectsLocationsPhraseSetsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}