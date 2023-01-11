package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchSummaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ProcessingState")
    public openapisdk.models.shared.SummaryEnumProcessingStateEnum processingState;
    public FetchSummaryQueryParams withProcessingState(openapisdk.models.shared.SummaryEnumProcessingStateEnum processingState) {
        this.processingState = processingState;
        return this;
    }
}