package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimDeviceBaysListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=device")
    public String device;
    public DcimDeviceBaysListQueryParams withDevice(String device) {
        this.device = device;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=device_id")
    public String deviceId;
    public DcimDeviceBaysListQueryParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public DcimDeviceBaysListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public DcimDeviceBaysListQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public DcimDeviceBaysListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tag")
    public String tag;
    public DcimDeviceBaysListQueryParams withTag(String tag) {
        this.tag = tag;
        return this;
    }
}