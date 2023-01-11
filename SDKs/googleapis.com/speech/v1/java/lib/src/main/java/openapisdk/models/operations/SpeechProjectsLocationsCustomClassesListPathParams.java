package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SpeechProjectsLocationsCustomClassesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public SpeechProjectsLocationsCustomClassesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}