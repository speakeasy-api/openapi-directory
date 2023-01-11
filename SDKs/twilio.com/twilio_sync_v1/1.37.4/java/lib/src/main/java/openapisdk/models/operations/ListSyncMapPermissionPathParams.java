package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSyncMapPermissionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=MapSid")
    public String mapSid;
    public ListSyncMapPermissionPathParams withMapSid(String mapSid) {
        this.mapSid = mapSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListSyncMapPermissionPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}