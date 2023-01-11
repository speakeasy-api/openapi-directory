package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSyncMapPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListSyncMapPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}