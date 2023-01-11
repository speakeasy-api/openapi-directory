package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMeCommentsToIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=toId")
    public Long toId;
    public GetMeCommentsToIdPathParams withToId(Long toId) {
        this.toId = toId;
        return this;
    }
}