package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimInterfaceTemplatesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=devicetype_id")
    public String devicetypeId;
    public DcimInterfaceTemplatesListQueryParams withDevicetypeId(String devicetypeId) {
        this.devicetypeId = devicetypeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=form_factor")
    public String formFactor;
    public DcimInterfaceTemplatesListQueryParams withFormFactor(String formFactor) {
        this.formFactor = formFactor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public DcimInterfaceTemplatesListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mgmt_only")
    public String mgmtOnly;
    public DcimInterfaceTemplatesListQueryParams withMgmtOnly(String mgmtOnly) {
        this.mgmtOnly = mgmtOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public DcimInterfaceTemplatesListQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public DcimInterfaceTemplatesListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
}