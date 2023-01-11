package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMeActivitiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=access")
    public openapisdk.models.shared.AccessEnum[] access;
    public GetMeActivitiesQueryParams withAccess(openapisdk.models.shared.AccessEnum[] access) {
        this.access = access;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetMeActivitiesQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}