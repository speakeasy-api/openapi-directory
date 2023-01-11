package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointCheckUsersSavedAlbumsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String ids;
    public EndpointCheckUsersSavedAlbumsQueryParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}