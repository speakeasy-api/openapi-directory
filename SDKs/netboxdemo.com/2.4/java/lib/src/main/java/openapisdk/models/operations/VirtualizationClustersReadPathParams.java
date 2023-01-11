package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VirtualizationClustersReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public VirtualizationClustersReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}