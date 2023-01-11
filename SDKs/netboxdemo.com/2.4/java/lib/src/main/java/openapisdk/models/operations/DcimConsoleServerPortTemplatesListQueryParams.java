package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimConsoleServerPortTemplatesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=devicetype_id")
    public String devicetypeId;
    public DcimConsoleServerPortTemplatesListQueryParams withDevicetypeId(String devicetypeId) {
        this.devicetypeId = devicetypeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public DcimConsoleServerPortTemplatesListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public DcimConsoleServerPortTemplatesListQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public DcimConsoleServerPortTemplatesListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
}