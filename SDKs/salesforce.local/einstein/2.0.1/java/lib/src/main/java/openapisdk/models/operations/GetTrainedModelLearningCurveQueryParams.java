package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTrainedModelLearningCurveQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=count")
    public String count;
    public GetTrainedModelLearningCurveQueryParams withCount(String count) {
        this.count = count;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetTrainedModelLearningCurveQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
}