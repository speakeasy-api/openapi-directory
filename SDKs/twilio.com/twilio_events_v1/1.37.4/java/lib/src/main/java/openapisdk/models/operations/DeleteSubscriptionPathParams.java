package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSubscriptionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteSubscriptionPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}