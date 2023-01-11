package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchSyncSyncMapItemPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Key")
    public String key;
    public FetchSyncSyncMapItemPathParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=MapSid")
    public String mapSid;
    public FetchSyncSyncMapItemPathParams withMapSid(String mapSid) {
        this.mapSid = mapSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public FetchSyncSyncMapItemPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}