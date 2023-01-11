package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranscoderProjectsLocationsJobTemplatesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public TranscoderProjectsLocationsJobTemplatesDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}