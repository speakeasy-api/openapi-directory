package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VirtualizationVirtualMachinesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public VirtualizationVirtualMachinesDeletePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}