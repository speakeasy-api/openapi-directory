package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUnderstandModelBuildUpdateUnderstandModelBuildRequest {
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public UpdateUnderstandModelBuildUpdateUnderstandModelBuildRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}