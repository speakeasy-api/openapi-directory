package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VirtualizationVirtualMachinesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public VirtualizationVirtualMachinesUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}