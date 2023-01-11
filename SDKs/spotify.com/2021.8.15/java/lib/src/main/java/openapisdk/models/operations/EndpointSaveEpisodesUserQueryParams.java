package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointSaveEpisodesUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String ids;
    public EndpointSaveEpisodesUserQueryParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}