package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFieldTypeUpdateFieldTypeRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateFieldTypeUpdateFieldTypeRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public UpdateFieldTypeUpdateFieldTypeRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}