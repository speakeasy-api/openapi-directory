package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateContactInMailinglistPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DirectoryId")
    public String directoryId;
    public CreateContactInMailinglistPathParams withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=MailingListId")
    public String mailingListId;
    public CreateContactInMailinglistPathParams withMailingListId(String mailingListId) {
        this.mailingListId = mailingListId;
        return this;
    }
}