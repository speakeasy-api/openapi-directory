package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditContactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=contact_id")
    public String contactId;
    public EditContactPathParams withContactId(String contactId) {
        this.contactId = contactId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public String groupId;
    public EditContactPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public EditContactPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}