package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPermissionAppsAppIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date")
    public Long date;
    public PostPermissionAppsAppIdQueryParams withDate(Long date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ip")
    public String ip;
    public PostPermissionAppsAppIdQueryParams withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userId")
    public String userId;
    public PostPermissionAppsAppIdQueryParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}