package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchAssetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public FetchAssetPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchAssetPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}