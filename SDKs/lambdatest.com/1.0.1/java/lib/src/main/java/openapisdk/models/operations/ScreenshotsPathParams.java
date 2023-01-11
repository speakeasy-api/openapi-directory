package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ScreenshotsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=test_id")
    public String testId;
    public ScreenshotsPathParams withTestId(String testId) {
        this.testId = testId;
        return this;
    }
}