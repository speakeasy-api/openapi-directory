package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointSaveTracksUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String ids;
    public EndpointSaveTracksUserQueryParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}