package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VirtualizationClustersPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public VirtualizationClustersPartialUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}