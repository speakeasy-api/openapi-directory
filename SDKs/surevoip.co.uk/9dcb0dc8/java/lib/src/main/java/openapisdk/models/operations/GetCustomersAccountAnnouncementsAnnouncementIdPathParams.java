package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCustomersAccountAnnouncementsAnnouncementIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account")
    public Long account;
    public GetCustomersAccountAnnouncementsAnnouncementIdPathParams withAccount(Long account) {
        this.account = account;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=announcement_id")
    public String announcementId;
    public GetCustomersAccountAnnouncementsAnnouncementIdPathParams withAnnouncementId(String announcementId) {
        this.announcementId = announcementId;
        return this;
    }
}