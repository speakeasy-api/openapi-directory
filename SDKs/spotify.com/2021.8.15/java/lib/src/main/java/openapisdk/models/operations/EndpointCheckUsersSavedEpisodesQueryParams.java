package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointCheckUsersSavedEpisodesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String ids;
    public EndpointCheckUsersSavedEpisodesQueryParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}