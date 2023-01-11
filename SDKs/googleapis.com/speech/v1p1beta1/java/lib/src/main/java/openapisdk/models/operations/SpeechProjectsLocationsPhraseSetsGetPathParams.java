package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SpeechProjectsLocationsPhraseSetsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public SpeechProjectsLocationsPhraseSetsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}