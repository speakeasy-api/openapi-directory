package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTrustProductPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteTrustProductPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}