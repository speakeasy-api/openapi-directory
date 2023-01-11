package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePredictionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=ids")
    public String[] ids;
    public DeletePredictionQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
}