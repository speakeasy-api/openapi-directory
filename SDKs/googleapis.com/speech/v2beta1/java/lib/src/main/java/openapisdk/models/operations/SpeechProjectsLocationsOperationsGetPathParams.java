package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SpeechProjectsLocationsOperationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public SpeechProjectsLocationsOperationsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}