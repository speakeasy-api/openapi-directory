package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SpeechProjectsLocationsPhraseSetsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public SpeechProjectsLocationsPhraseSetsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}