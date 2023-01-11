package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VisionImagesAsyncBatchAnnotateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public VisionImagesAsyncBatchAnnotateSecurityOption1 option1;
    public VisionImagesAsyncBatchAnnotateSecurity withOption1(VisionImagesAsyncBatchAnnotateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public VisionImagesAsyncBatchAnnotateSecurityOption2 option2;
    public VisionImagesAsyncBatchAnnotateSecurity withOption2(VisionImagesAsyncBatchAnnotateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}