package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SasportalNodesNodesNodesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public SasportalNodesNodesNodesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}