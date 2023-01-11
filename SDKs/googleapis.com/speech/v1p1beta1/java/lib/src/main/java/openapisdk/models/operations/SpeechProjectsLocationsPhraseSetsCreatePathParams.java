package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SpeechProjectsLocationsPhraseSetsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public SpeechProjectsLocationsPhraseSetsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}