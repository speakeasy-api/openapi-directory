package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimDeviceTypesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id__in")
    public String idIn;
    public DcimDeviceTypesListQueryParams withIdIn(String idIn) {
        this.idIn = idIn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_console_server")
    public String isConsoleServer;
    public DcimDeviceTypesListQueryParams withIsConsoleServer(String isConsoleServer) {
        this.isConsoleServer = isConsoleServer;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_full_depth")
    public String isFullDepth;
    public DcimDeviceTypesListQueryParams withIsFullDepth(String isFullDepth) {
        this.isFullDepth = isFullDepth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_network_device")
    public String isNetworkDevice;
    public DcimDeviceTypesListQueryParams withIsNetworkDevice(String isNetworkDevice) {
        this.isNetworkDevice = isNetworkDevice;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_pdu")
    public String isPdu;
    public DcimDeviceTypesListQueryParams withIsPdu(String isPdu) {
        this.isPdu = isPdu;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public DcimDeviceTypesListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=manufacturer")
    public String manufacturer;
    public DcimDeviceTypesListQueryParams withManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=manufacturer_id")
    public String manufacturerId;
    public DcimDeviceTypesListQueryParams withManufacturerId(String manufacturerId) {
        this.manufacturerId = manufacturerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=model")
    public String model;
    public DcimDeviceTypesListQueryParams withModel(String model) {
        this.model = model;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public DcimDeviceTypesListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=part_number")
    public String partNumber;
    public DcimDeviceTypesListQueryParams withPartNumber(String partNumber) {
        this.partNumber = partNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public DcimDeviceTypesListQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=slug")
    public String slug;
    public DcimDeviceTypesListQueryParams withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subdevice_role")
    public String subdeviceRole;
    public DcimDeviceTypesListQueryParams withSubdeviceRole(String subdeviceRole) {
        this.subdeviceRole = subdeviceRole;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tag")
    public String tag;
    public DcimDeviceTypesListQueryParams withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=u_height")
    public Double uHeight;
    public DcimDeviceTypesListQueryParams withUHeight(Double uHeight) {
        this.uHeight = uHeight;
        return this;
    }
}