package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateModelBuildCreateModelBuildRequest {
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public CreateModelBuildCreateModelBuildRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateModelBuildCreateModelBuildRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}