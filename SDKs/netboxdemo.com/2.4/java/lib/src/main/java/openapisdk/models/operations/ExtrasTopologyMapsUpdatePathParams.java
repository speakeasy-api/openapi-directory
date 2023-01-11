package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasTopologyMapsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public ExtrasTopologyMapsUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}