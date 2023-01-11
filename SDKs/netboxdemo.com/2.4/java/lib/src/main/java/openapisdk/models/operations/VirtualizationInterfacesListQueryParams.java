package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VirtualizationInterfacesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=enabled")
    public String enabled;
    public VirtualizationInterfacesListQueryParams withEnabled(String enabled) {
        this.enabled = enabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public VirtualizationInterfacesListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mac_address")
    public String macAddress;
    public VirtualizationInterfacesListQueryParams withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mtu")
    public Double mtu;
    public VirtualizationInterfacesListQueryParams withMtu(Double mtu) {
        this.mtu = mtu;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public VirtualizationInterfacesListQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public VirtualizationInterfacesListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=virtual_machine")
    public String virtualMachine;
    public VirtualizationInterfacesListQueryParams withVirtualMachine(String virtualMachine) {
        this.virtualMachine = virtualMachine;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=virtual_machine_id")
    public String virtualMachineId;
    public VirtualizationInterfacesListQueryParams withVirtualMachineId(String virtualMachineId) {
        this.virtualMachineId = virtualMachineId;
        return this;
    }
}