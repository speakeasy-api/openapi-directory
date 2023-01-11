package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesCampaignsIdSyndicateFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=displayMethod")
    public String displayMethod;
    public GetResourcesCampaignsIdSyndicateFormatQueryParams withDisplayMethod(String displayMethod) {
        this.displayMethod = displayMethod;
        return this;
    }
}