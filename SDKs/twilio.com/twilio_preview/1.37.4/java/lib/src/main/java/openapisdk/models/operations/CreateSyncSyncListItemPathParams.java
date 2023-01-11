package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSyncSyncListItemPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ListSid")
    public String listSid;
    public CreateSyncSyncListItemPathParams withListSid(String listSid) {
        this.listSid = listSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public CreateSyncSyncListItemPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}