package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateReturnLabelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=label_id")
    public String labelId;
    public CreateReturnLabelPathParams withLabelId(String labelId) {
        this.labelId = labelId;
        return this;
    }
}