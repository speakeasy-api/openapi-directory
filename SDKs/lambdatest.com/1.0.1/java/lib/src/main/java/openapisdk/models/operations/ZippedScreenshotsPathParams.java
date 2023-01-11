package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ZippedScreenshotsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=test_id")
    public String testId;
    public ZippedScreenshotsPathParams withTestId(String testId) {
        this.testId = testId;
        return this;
    }
}