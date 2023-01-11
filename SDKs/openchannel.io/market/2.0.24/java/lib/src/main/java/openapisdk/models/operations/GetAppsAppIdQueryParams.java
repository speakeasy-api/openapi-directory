package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAppsAppIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=trackViews")
    public Boolean trackViews;
    public GetAppsAppIdQueryParams withTrackViews(Boolean trackViews) {
        this.trackViews = trackViews;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userId")
    public String userId;
    public GetAppsAppIdQueryParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}