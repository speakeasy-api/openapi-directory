package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSupportingDocumentCreateSupportingDocumentRequest {
    @SpeakeasyMetadata("form:name=Attributes")
    public Object attributes;
    public CreateSupportingDocumentCreateSupportingDocumentRequest withAttributes(Object attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateSupportingDocumentCreateSupportingDocumentRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Type")
    public String type;
    public CreateSupportingDocumentCreateSupportingDocumentRequest withType(String type) {
        this.type = type;
        return this;
    }
}