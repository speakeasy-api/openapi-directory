package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SasportalNodesNodesNodesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public SasportalNodesNodesNodesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}