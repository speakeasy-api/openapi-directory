package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersUserIdFavoritesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetUsersUserIdFavoritesQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=linked_partitioning")
    public Boolean linkedPartitioning;
    public GetUsersUserIdFavoritesQueryParams withLinkedPartitioning(Boolean linkedPartitioning) {
        this.linkedPartitioning = linkedPartitioning;
        return this;
    }
}