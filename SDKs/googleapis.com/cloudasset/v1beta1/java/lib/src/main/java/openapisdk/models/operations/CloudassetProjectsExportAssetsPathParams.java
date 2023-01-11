package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudassetProjectsExportAssetsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudassetProjectsExportAssetsPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}