package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchSubscriptionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchSubscriptionPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}