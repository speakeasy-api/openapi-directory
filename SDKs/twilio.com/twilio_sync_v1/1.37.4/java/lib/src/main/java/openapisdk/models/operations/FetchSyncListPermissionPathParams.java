package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchSyncListPermissionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Identity")
    public String identity;
    public FetchSyncListPermissionPathParams withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ListSid")
    public String listSid;
    public FetchSyncListPermissionPathParams withListSid(String listSid) {
        this.listSid = listSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public FetchSyncListPermissionPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}