package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProdTtSasportalNodesNodesDeploymentsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ProdTtSasportalNodesNodesDeploymentsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}