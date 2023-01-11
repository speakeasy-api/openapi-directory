package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesUserMediaListsIdJsonQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=displayMethod")
    public String displayMethod;
    public GetResourcesUserMediaListsIdJsonQueryParams withDisplayMethod(String displayMethod) {
        this.displayMethod = displayMethod;
        return this;
    }
}