package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SpeechProjectsLocationsOperationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public SpeechProjectsLocationsOperationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}