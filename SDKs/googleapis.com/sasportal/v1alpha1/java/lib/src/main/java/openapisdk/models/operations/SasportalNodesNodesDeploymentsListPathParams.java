package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SasportalNodesNodesDeploymentsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public SasportalNodesNodesDeploymentsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}