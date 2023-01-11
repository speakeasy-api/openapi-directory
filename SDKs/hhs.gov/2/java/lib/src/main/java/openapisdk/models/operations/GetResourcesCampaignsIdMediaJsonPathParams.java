package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesCampaignsIdMediaJsonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetResourcesCampaignsIdMediaJsonPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}