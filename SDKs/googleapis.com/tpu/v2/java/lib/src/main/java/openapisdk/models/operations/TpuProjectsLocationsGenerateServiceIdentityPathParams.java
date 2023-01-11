package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TpuProjectsLocationsGenerateServiceIdentityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public TpuProjectsLocationsGenerateServiceIdentityPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}