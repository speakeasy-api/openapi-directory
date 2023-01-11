package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDriversQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=all")
    public Boolean all;
    public GetDriversQueryParams withAll(Boolean all) {
        this.all = all;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deviceId")
    public Long deviceId;
    public GetDriversQueryParams withDeviceId(Long deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groupId")
    public Long groupId;
    public GetDriversQueryParams withGroupId(Long groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=refresh")
    public Boolean refresh;
    public GetDriversQueryParams withRefresh(Boolean refresh) {
        this.refresh = refresh;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userId")
    public Long userId;
    public GetDriversQueryParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}