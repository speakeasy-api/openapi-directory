package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMeFavoritesIdsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetMeFavoritesIdsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}