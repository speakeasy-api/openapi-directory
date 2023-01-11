package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworksIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetNetworksIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}