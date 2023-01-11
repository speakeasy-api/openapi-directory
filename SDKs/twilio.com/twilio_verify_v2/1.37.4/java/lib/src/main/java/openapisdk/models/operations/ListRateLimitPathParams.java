package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRateLimitPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListRateLimitPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}