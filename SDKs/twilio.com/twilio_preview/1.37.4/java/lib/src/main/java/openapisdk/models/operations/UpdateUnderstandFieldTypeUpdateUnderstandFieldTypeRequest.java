package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}