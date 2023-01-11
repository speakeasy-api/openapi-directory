package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNotificationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ChallengeSid")
    public String challengeSid;
    public CreateNotificationPathParams withChallengeSid(String challengeSid) {
        this.challengeSid = challengeSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Identity")
    public String identity;
    public CreateNotificationPathParams withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public CreateNotificationPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}