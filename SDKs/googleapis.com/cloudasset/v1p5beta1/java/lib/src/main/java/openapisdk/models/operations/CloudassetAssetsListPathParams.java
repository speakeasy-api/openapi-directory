package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudassetAssetsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudassetAssetsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}