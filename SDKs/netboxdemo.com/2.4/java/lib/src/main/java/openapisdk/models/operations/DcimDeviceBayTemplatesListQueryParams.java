package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimDeviceBayTemplatesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=devicetype_id")
    public String devicetypeId;
    public DcimDeviceBayTemplatesListQueryParams withDevicetypeId(String devicetypeId) {
        this.devicetypeId = devicetypeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public DcimDeviceBayTemplatesListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public DcimDeviceBayTemplatesListQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public DcimDeviceBayTemplatesListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
}