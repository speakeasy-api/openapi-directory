package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimDevicesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=asset_tag")
    public String assetTag;
    public DcimDevicesListQueryParams withAssetTag(String assetTag) {
        this.assetTag = assetTag;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cluster_id")
    public String clusterId;
    public DcimDevicesListQueryParams withClusterId(String clusterId) {
        this.clusterId = clusterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=device_type_id")
    public String deviceTypeId;
    public DcimDevicesListQueryParams withDeviceTypeId(String deviceTypeId) {
        this.deviceTypeId = deviceTypeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=has_primary_ip")
    public String hasPrimaryIp;
    public DcimDevicesListQueryParams withHasPrimaryIp(String hasPrimaryIp) {
        this.hasPrimaryIp = hasPrimaryIp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id__in")
    public String idIn;
    public DcimDevicesListQueryParams withIdIn(String idIn) {
        this.idIn = idIn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_console_server")
    public String isConsoleServer;
    public DcimDevicesListQueryParams withIsConsoleServer(String isConsoleServer) {
        this.isConsoleServer = isConsoleServer;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_full_depth")
    public String isFullDepth;
    public DcimDevicesListQueryParams withIsFullDepth(String isFullDepth) {
        this.isFullDepth = isFullDepth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_network_device")
    public String isNetworkDevice;
    public DcimDevicesListQueryParams withIsNetworkDevice(String isNetworkDevice) {
        this.isNetworkDevice = isNetworkDevice;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_pdu")
    public String isPdu;
    public DcimDevicesListQueryParams withIsPdu(String isPdu) {
        this.isPdu = isPdu;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public DcimDevicesListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mac_address")
    public String macAddress;
    public DcimDevicesListQueryParams withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=manufacturer")
    public String manufacturer;
    public DcimDevicesListQueryParams withManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=manufacturer_id")
    public String manufacturerId;
    public DcimDevicesListQueryParams withManufacturerId(String manufacturerId) {
        this.manufacturerId = manufacturerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=model")
    public String model;
    public DcimDevicesListQueryParams withModel(String model) {
        this.model = model;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public DcimDevicesListQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public DcimDevicesListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=platform")
    public String platform;
    public DcimDevicesListQueryParams withPlatform(String platform) {
        this.platform = platform;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=platform_id")
    public String platformId;
    public DcimDevicesListQueryParams withPlatformId(String platformId) {
        this.platformId = platformId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=position")
    public Double position;
    public DcimDevicesListQueryParams withPosition(Double position) {
        this.position = position;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public DcimDevicesListQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rack_group_id")
    public String rackGroupId;
    public DcimDevicesListQueryParams withRackGroupId(String rackGroupId) {
        this.rackGroupId = rackGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rack_id")
    public String rackId;
    public DcimDevicesListQueryParams withRackId(String rackId) {
        this.rackId = rackId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=region")
    public String region;
    public DcimDevicesListQueryParams withRegion(String region) {
        this.region = region;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=region_id")
    public Double regionId;
    public DcimDevicesListQueryParams withRegionId(Double regionId) {
        this.regionId = regionId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=role")
    public String role;
    public DcimDevicesListQueryParams withRole(String role) {
        this.role = role;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=role_id")
    public String roleId;
    public DcimDevicesListQueryParams withRoleId(String roleId) {
        this.roleId = roleId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serial")
    public String serial;
    public DcimDevicesListQueryParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site")
    public String site;
    public DcimDevicesListQueryParams withSite(String site) {
        this.site = site;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site_id")
    public String siteId;
    public DcimDevicesListQueryParams withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public String status;
    public DcimDevicesListQueryParams withStatus(String status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tag")
    public String tag;
    public DcimDevicesListQueryParams withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tenant")
    public String tenant;
    public DcimDevicesListQueryParams withTenant(String tenant) {
        this.tenant = tenant;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tenant_id")
    public String tenantId;
    public DcimDevicesListQueryParams withTenantId(String tenantId) {
        this.tenantId = tenantId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=virtual_chassis_id")
    public String virtualChassisId;
    public DcimDevicesListQueryParams withVirtualChassisId(String virtualChassisId) {
        this.virtualChassisId = virtualChassisId;
        return this;
    }
}