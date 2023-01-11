package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUnderstandModelBuildCreateUnderstandModelBuildRequest {
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public CreateUnderstandModelBuildCreateUnderstandModelBuildRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateUnderstandModelBuildCreateUnderstandModelBuildRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}