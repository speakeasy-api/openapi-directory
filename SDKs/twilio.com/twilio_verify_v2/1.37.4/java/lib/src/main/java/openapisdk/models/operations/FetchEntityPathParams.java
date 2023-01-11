package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchEntityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Identity")
    public String identity;
    public FetchEntityPathParams withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public FetchEntityPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}