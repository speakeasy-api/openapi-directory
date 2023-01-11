package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecognizeTextQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mode")
    public openapisdk.models.shared.TextRecognitionModeEnum mode;
    public RecognizeTextQueryParams withMode(openapisdk.models.shared.TextRecognitionModeEnum mode) {
        this.mode = mode;
        return this;
    }
}