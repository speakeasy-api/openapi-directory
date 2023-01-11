package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProdTtSasportalNodesNodesDevicesCreateSignedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ProdTtSasportalNodesNodesDevicesCreateSignedPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}