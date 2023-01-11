package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSyncStreamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListSyncStreamPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}