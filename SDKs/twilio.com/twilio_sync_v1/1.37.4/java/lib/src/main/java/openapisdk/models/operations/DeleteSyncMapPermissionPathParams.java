package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSyncMapPermissionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Identity")
    public String identity;
    public DeleteSyncMapPermissionPathParams withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=MapSid")
    public String mapSid;
    public DeleteSyncMapPermissionPathParams withMapSid(String mapSid) {
        this.mapSid = mapSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public DeleteSyncMapPermissionPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}