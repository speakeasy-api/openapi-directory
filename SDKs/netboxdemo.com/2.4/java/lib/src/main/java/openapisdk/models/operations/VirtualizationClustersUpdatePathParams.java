package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VirtualizationClustersUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public VirtualizationClustersUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}