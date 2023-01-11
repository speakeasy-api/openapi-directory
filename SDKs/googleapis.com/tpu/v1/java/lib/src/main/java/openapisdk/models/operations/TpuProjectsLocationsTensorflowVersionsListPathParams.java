package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TpuProjectsLocationsTensorflowVersionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public TpuProjectsLocationsTensorflowVersionsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}