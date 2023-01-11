package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VisionFilesAsyncBatchAnnotateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public VisionFilesAsyncBatchAnnotateSecurityOption1 option1;
    public VisionFilesAsyncBatchAnnotateSecurity withOption1(VisionFilesAsyncBatchAnnotateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public VisionFilesAsyncBatchAnnotateSecurityOption2 option2;
    public VisionFilesAsyncBatchAnnotateSecurity withOption2(VisionFilesAsyncBatchAnnotateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}