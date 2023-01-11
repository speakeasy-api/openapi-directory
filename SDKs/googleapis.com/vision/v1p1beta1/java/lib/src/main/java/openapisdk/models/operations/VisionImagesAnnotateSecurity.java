package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VisionImagesAnnotateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public VisionImagesAnnotateSecurityOption1 option1;
    public VisionImagesAnnotateSecurity withOption1(VisionImagesAnnotateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public VisionImagesAnnotateSecurityOption2 option2;
    public VisionImagesAnnotateSecurity withOption2(VisionImagesAnnotateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}