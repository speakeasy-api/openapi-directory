package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTrackingLogFromLabelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=label_id")
    public String labelId;
    public GetTrackingLogFromLabelPathParams withLabelId(String labelId) {
        this.labelId = labelId;
        return this;
    }
}