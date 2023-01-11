package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProdTtSasportalNodesNodesDevicesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ProdTtSasportalNodesNodesDevicesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}