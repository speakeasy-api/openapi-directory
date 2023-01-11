package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetupV1ResourcegroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deleted")
    public Boolean deleted;
    public GetSetupV1ResourcegroupsQueryParams withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetSetupV1ResourcegroupsQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationId")
    public String locationId;
    public GetSetupV1ResourcegroupsQueryParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public GetSetupV1ResourcegroupsQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
}