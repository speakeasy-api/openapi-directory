package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateItemAssignmentCreateItemAssignmentRequest {
    @SpeakeasyMetadata("form:name=ObjectSid")
    public String objectSid;
    public CreateItemAssignmentCreateItemAssignmentRequest withObjectSid(String objectSid) {
        this.objectSid = objectSid;
        return this;
    }
}