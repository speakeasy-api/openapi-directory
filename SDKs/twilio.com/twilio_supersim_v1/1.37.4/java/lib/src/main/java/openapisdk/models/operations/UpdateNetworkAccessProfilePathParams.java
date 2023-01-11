package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkAccessProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateNetworkAccessProfilePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}