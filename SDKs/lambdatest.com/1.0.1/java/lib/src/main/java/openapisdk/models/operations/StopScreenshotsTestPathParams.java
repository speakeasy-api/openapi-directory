package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopScreenshotsTestPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=test_id")
    public String testId;
    public StopScreenshotsTestPathParams withTestId(String testId) {
        this.testId = testId;
        return this;
    }
}