package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointSaveAlbumsUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String ids;
    public EndpointSaveAlbumsUserQueryParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}