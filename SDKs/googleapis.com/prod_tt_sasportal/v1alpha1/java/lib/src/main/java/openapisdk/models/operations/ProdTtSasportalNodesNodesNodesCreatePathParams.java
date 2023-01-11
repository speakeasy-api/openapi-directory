package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProdTtSasportalNodesNodesNodesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ProdTtSasportalNodesNodesNodesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}