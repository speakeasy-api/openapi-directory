package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetupV1ServicesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deleted")
    public Boolean deleted;
    public GetSetupV1ServicesQueryParams withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetSetupV1ServicesQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationId")
    public String locationId;
    public GetSetupV1ServicesQueryParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public GetSetupV1ServicesQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serviceGroupId")
    public Integer serviceGroupId;
    public GetSetupV1ServicesQueryParams withServiceGroupId(Integer serviceGroupId) {
        this.serviceGroupId = serviceGroupId;
        return this;
    }
}