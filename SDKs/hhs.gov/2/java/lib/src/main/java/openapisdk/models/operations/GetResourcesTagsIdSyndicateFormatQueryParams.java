package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesTagsIdSyndicateFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=displayMethod")
    public String displayMethod;
    public GetResourcesTagsIdSyndicateFormatQueryParams withDisplayMethod(String displayMethod) {
        this.displayMethod = displayMethod;
        return this;
    }
}