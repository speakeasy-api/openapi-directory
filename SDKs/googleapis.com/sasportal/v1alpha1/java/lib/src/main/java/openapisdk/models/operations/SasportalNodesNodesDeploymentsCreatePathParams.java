package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SasportalNodesNodesDeploymentsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public SasportalNodesNodesDeploymentsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}