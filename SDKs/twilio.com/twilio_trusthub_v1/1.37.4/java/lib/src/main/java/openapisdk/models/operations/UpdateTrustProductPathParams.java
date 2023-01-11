package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTrustProductPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateTrustProductPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}