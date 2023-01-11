package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranscoderProjectsLocationsJobTemplatesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public TranscoderProjectsLocationsJobTemplatesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}