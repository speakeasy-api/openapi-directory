package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SasportalNodesNodesDevicesCreateSignedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public SasportalNodesNodesDevicesCreateSignedPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}