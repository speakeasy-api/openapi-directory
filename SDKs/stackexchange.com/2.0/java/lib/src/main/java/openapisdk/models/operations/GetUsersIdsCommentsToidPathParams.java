package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersIdsCommentsToidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ids")
    public String ids;
    public GetUsersIdsCommentsToidPathParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=toid")
    public Long toid;
    public GetUsersIdsCommentsToidPathParams withToid(Long toid) {
        this.toid = toid;
        return this;
    }
}