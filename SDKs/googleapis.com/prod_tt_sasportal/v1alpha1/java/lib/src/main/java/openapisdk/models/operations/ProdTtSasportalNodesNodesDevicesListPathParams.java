package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProdTtSasportalNodesNodesDevicesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ProdTtSasportalNodesNodesDevicesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}