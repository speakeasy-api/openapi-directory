package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesSourcesIdSyndicateFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=displayMethod")
    public String displayMethod;
    public GetResourcesSourcesIdSyndicateFormatQueryParams withDisplayMethod(String displayMethod) {
        this.displayMethod = displayMethod;
        return this;
    }
}