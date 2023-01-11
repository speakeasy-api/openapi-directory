package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudassetProjectsBatchGetAssetsHistoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudassetProjectsBatchGetAssetsHistoryPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}