package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersUserIdFollowingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetUsersUserIdFollowingsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}