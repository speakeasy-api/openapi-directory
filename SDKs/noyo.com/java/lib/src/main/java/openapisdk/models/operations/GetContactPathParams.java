package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=contact_id")
    public String contactId;
    public GetContactPathParams withContactId(String contactId) {
        this.contactId = contactId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public String groupId;
    public GetContactPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}