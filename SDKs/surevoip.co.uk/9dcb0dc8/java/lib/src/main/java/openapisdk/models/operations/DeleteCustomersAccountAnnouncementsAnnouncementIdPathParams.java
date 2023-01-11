package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCustomersAccountAnnouncementsAnnouncementIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account")
    public Long account;
    public DeleteCustomersAccountAnnouncementsAnnouncementIdPathParams withAccount(Long account) {
        this.account = account;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=announcement_id")
    public String announcementId;
    public DeleteCustomersAccountAnnouncementsAnnouncementIdPathParams withAnnouncementId(String announcementId) {
        this.announcementId = announcementId;
        return this;
    }
}