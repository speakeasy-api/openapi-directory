package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLabelByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=label_id")
    public String labelId;
    public GetLabelByIdPathParams withLabelId(String labelId) {
        this.labelId = labelId;
        return this;
    }
}