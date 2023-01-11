package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointCheckUsersSavedShowsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String ids;
    public EndpointCheckUsersSavedShowsQueryParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}