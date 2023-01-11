package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeofencesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=all")
    public Boolean all;
    public GetGeofencesQueryParams withAll(Boolean all) {
        this.all = all;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deviceId")
    public Long deviceId;
    public GetGeofencesQueryParams withDeviceId(Long deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groupId")
    public Long groupId;
    public GetGeofencesQueryParams withGroupId(Long groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=refresh")
    public Boolean refresh;
    public GetGeofencesQueryParams withRefresh(Boolean refresh) {
        this.refresh = refresh;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userId")
    public Long userId;
    public GetGeofencesQueryParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}