package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointCheckUsersSavedTracksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String ids;
    public EndpointCheckUsersSavedTracksQueryParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}