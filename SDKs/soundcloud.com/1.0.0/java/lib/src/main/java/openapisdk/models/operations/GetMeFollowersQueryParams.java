package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMeFollowersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetMeFollowersQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}