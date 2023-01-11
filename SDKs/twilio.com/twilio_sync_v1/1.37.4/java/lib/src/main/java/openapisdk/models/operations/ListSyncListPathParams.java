package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSyncListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListSyncListPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}