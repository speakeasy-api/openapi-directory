package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListChallengePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Identity")
    public String identity;
    public ListChallengePathParams withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListChallengePathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}