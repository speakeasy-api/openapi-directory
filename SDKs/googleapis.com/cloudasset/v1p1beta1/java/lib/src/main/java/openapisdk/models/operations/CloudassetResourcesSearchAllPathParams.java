package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudassetResourcesSearchAllPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scope")
    public String scope;
    public CloudassetResourcesSearchAllPathParams withScope(String scope) {
        this.scope = scope;
        return this;
    }
}