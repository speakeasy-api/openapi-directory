package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCustomerProfileEntityAssignmentCreateCustomerProfileEntityAssignmentRequest {
    @SpeakeasyMetadata("form:name=ObjectSid")
    public String objectSid;
    public CreateCustomerProfileEntityAssignmentCreateCustomerProfileEntityAssignmentRequest withObjectSid(String objectSid) {
        this.objectSid = objectSid;
        return this;
    }
}