package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VoidLabelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=label_id")
    public String labelId;
    public VoidLabelPathParams withLabelId(String labelId) {
        this.labelId = labelId;
        return this;
    }
}