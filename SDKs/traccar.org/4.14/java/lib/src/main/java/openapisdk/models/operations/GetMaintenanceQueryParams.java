package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMaintenanceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=all")
    public Boolean all;
    public GetMaintenanceQueryParams withAll(Boolean all) {
        this.all = all;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deviceId")
    public Long deviceId;
    public GetMaintenanceQueryParams withDeviceId(Long deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groupId")
    public Long groupId;
    public GetMaintenanceQueryParams withGroupId(Long groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=refresh")
    public Boolean refresh;
    public GetMaintenanceQueryParams withRefresh(Boolean refresh) {
        this.refresh = refresh;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userId")
    public Long userId;
    public GetMaintenanceQueryParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}