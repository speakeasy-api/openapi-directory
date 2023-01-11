package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFieldTypeCreateFieldTypeRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateFieldTypeCreateFieldTypeRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateFieldTypeCreateFieldTypeRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}