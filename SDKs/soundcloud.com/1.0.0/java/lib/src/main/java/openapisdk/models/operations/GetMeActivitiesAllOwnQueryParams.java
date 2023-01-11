package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMeActivitiesAllOwnQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=access")
    public openapisdk.models.shared.AccessEnum[] access;
    public GetMeActivitiesAllOwnQueryParams withAccess(openapisdk.models.shared.AccessEnum[] access) {
        this.access = access;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetMeActivitiesAllOwnQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}