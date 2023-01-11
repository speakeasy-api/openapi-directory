package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointRemoveAlbumsUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String ids;
    public EndpointRemoveAlbumsUserQueryParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}