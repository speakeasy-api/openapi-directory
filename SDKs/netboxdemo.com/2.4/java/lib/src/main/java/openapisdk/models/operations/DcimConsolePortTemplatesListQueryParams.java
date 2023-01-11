package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimConsolePortTemplatesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=devicetype_id")
    public String devicetypeId;
    public DcimConsolePortTemplatesListQueryParams withDevicetypeId(String devicetypeId) {
        this.devicetypeId = devicetypeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public DcimConsolePortTemplatesListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public DcimConsolePortTemplatesListQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public DcimConsolePortTemplatesListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
}