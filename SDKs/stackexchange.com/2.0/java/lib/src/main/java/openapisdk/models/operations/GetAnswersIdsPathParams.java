package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAnswersIdsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ids")
    public String ids;
    public GetAnswersIdsPathParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}