package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateModelBuildUpdateModelBuildRequest {
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public UpdateModelBuildUpdateModelBuildRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}