package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetActionPackageActivityListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetActionPackageActivityListQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetActionPackageActivityListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public GetActionPackageActivityListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
}