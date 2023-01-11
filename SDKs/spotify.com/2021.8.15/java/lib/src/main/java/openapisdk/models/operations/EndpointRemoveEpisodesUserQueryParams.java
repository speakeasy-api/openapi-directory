package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointRemoveEpisodesUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String ids;
    public EndpointRemoveEpisodesUserQueryParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}