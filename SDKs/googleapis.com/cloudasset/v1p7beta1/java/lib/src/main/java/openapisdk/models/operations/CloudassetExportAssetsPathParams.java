package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudassetExportAssetsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudassetExportAssetsPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}