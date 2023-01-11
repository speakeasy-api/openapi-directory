package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointSaveShowsUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String ids;
    public EndpointSaveShowsUserQueryParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}