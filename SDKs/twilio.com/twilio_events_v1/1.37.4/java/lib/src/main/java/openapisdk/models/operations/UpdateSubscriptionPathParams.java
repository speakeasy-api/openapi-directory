package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSubscriptionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateSubscriptionPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}