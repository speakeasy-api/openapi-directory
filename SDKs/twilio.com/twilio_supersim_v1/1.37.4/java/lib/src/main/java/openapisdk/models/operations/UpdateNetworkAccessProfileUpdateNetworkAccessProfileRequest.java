package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest {
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}