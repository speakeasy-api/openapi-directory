package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SpeechProjectsLocationsCustomClassesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public SpeechProjectsLocationsCustomClassesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}