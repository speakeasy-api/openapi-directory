package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersUserIdWebProfilesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetUsersUserIdWebProfilesQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}