package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasTopologyMapsRenderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public ExtrasTopologyMapsRenderPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}