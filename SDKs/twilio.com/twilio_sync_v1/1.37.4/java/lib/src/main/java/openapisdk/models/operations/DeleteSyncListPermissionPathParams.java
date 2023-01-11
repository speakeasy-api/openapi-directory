package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSyncListPermissionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Identity")
    public String identity;
    public DeleteSyncListPermissionPathParams withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ListSid")
    public String listSid;
    public DeleteSyncListPermissionPathParams withListSid(String listSid) {
        this.listSid = listSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public DeleteSyncListPermissionPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}