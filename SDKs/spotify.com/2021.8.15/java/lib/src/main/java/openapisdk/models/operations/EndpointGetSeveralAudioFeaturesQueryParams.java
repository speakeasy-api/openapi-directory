package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetSeveralAudioFeaturesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String ids;
    public EndpointGetSeveralAudioFeaturesQueryParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}