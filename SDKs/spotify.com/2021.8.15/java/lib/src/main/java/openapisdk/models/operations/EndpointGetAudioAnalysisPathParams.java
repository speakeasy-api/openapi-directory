package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetAudioAnalysisPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public EndpointGetAudioAnalysisPathParams withId(String id) {
        this.id = id;
        return this;
    }
}