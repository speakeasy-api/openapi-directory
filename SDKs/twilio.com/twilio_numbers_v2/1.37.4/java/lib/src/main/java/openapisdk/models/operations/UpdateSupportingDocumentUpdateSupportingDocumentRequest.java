package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSupportingDocumentUpdateSupportingDocumentRequest {
    @SpeakeasyMetadata("form:name=Attributes")
    public Object attributes;
    public UpdateSupportingDocumentUpdateSupportingDocumentRequest withAttributes(Object attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateSupportingDocumentUpdateSupportingDocumentRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}