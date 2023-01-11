package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSyncSyncListItemPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Index")
    public Long index;
    public UpdateSyncSyncListItemPathParams withIndex(Long index) {
        this.index = index;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ListSid")
    public String listSid;
    public UpdateSyncSyncListItemPathParams withListSid(String listSid) {
        this.listSid = listSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public UpdateSyncSyncListItemPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}