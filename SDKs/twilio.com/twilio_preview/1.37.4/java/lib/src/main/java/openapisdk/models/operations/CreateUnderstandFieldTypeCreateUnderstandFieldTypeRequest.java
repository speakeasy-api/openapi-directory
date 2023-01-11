package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUnderstandFieldTypeCreateUnderstandFieldTypeRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateUnderstandFieldTypeCreateUnderstandFieldTypeRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateUnderstandFieldTypeCreateUnderstandFieldTypeRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}