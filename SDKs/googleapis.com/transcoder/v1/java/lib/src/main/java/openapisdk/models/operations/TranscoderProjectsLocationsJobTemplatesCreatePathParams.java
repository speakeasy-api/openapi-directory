package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranscoderProjectsLocationsJobTemplatesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public TranscoderProjectsLocationsJobTemplatesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}