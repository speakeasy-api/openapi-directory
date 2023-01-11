package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutNetworksIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PutNetworksIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}