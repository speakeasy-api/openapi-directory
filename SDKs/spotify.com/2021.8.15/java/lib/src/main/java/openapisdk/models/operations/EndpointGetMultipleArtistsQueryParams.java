package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetMultipleArtistsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String ids;
    public EndpointGetMultipleArtistsQueryParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}