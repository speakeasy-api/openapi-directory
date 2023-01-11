package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasTopologyMapsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public ExtrasTopologyMapsPartialUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}