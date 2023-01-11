package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSyncMapItemPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=MapSid")
    public String mapSid;
    public CreateSyncMapItemPathParams withMapSid(String mapSid) {
        this.mapSid = mapSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public CreateSyncMapItemPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}