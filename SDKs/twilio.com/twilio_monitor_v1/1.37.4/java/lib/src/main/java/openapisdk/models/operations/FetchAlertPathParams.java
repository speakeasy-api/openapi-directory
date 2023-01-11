package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchAlertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchAlertPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}