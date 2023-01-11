package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetupV1LocationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deleted")
    public Boolean deleted;
    public GetSetupV1LocationsQueryParams withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetSetupV1LocationsQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetSetupV1LocationsQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public GetSetupV1LocationsQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serviceId")
    public String serviceId;
    public GetSetupV1LocationsQueryParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}