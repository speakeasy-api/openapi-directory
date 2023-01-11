package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VirtualizationVirtualMachinesPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public VirtualizationVirtualMachinesPartialUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}