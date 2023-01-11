package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimConsolePortsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=device")
    public String device;
    public DcimConsolePortsListQueryParams withDevice(String device) {
        this.device = device;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=device_id")
    public String deviceId;
    public DcimConsolePortsListQueryParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public DcimConsolePortsListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public DcimConsolePortsListQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public DcimConsolePortsListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tag")
    public String tag;
    public DcimConsolePortsListQueryParams withTag(String tag) {
        this.tag = tag;
        return this;
    }
}