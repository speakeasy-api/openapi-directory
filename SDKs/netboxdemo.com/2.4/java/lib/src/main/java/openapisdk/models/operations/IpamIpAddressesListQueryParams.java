package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamIpAddressesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=address")
    public String address;
    public IpamIpAddressesListQueryParams withAddress(String address) {
        this.address = address;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=device")
    public String device;
    public IpamIpAddressesListQueryParams withDevice(String device) {
        this.device = device;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=device_id")
    public Double deviceId;
    public IpamIpAddressesListQueryParams withDeviceId(Double deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=family")
    public String family;
    public IpamIpAddressesListQueryParams withFamily(String family) {
        this.family = family;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id__in")
    public String idIn;
    public IpamIpAddressesListQueryParams withIdIn(String idIn) {
        this.idIn = idIn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=interface_id")
    public String interfaceId;
    public IpamIpAddressesListQueryParams withInterfaceId(String interfaceId) {
        this.interfaceId = interfaceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public IpamIpAddressesListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mask_length")
    public Double maskLength;
    public IpamIpAddressesListQueryParams withMaskLength(Double maskLength) {
        this.maskLength = maskLength;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public IpamIpAddressesListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=parent")
    public String parent;
    public IpamIpAddressesListQueryParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public IpamIpAddressesListQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=role")
    public String role;
    public IpamIpAddressesListQueryParams withRole(String role) {
        this.role = role;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public String status;
    public IpamIpAddressesListQueryParams withStatus(String status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tag")
    public String tag;
    public IpamIpAddressesListQueryParams withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tenant")
    public String tenant;
    public IpamIpAddressesListQueryParams withTenant(String tenant) {
        this.tenant = tenant;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tenant_id")
    public String tenantId;
    public IpamIpAddressesListQueryParams withTenantId(String tenantId) {
        this.tenantId = tenantId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=virtual_machine")
    public String virtualMachine;
    public IpamIpAddressesListQueryParams withVirtualMachine(String virtualMachine) {
        this.virtualMachine = virtualMachine;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=virtual_machine_id")
    public String virtualMachineId;
    public IpamIpAddressesListQueryParams withVirtualMachineId(String virtualMachineId) {
        this.virtualMachineId = virtualMachineId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vrf")
    public String vrf;
    public IpamIpAddressesListQueryParams withVrf(String vrf) {
        this.vrf = vrf;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vrf_id")
    public String vrfId;
    public IpamIpAddressesListQueryParams withVrfId(String vrfId) {
        this.vrfId = vrfId;
        return this;
    }
}