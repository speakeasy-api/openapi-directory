package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersUserIdTracksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=access")
    public openapisdk.models.shared.AccessEnum[] access;
    public GetUsersUserIdTracksQueryParams withAccess(openapisdk.models.shared.AccessEnum[] access) {
        this.access = access;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetUsersUserIdTracksQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=linked_partitioning")
    public Boolean linkedPartitioning;
    public GetUsersUserIdTracksQueryParams withLinkedPartitioning(Boolean linkedPartitioning) {
        this.linkedPartitioning = linkedPartitioning;
        return this;
    }
}