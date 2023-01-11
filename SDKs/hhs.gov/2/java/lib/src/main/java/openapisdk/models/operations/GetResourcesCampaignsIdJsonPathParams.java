package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesCampaignsIdJsonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetResourcesCampaignsIdJsonPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}